export const URL_REMOTA = "https://raw.githubusercontent.com/diogolopes758/enem-questoes-api/main/questoes.json";

const normalizarMateria = (valor) => valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export function normalizarQuestoes(dados, fonte) {
  if (!Array.isArray(dados)) throw new Error("O banco de questões não é uma lista.");
  const ids = new Set();
  return dados.map((q) => {
    const materia = fonte === "remoto" ? q.area : q.materia;
    const questao = fonte === "remoto" ? q.pergunta : q.questao;
    const correta = typeof q.correta === "string"
      ? q.correta.toUpperCase().charCodeAt(0) - 64
      : q.correta + 1;
    if ((typeof q.id !== "number" && typeof q.id !== "string") || ids.has(String(q.id)) ||
        !Number.isInteger(q.ano) || typeof materia !== "string" || !materia.trim() ||
        typeof questao !== "string" || !questao.trim() || !Array.isArray(q.alternativas) ||
        !q.alternativas.length || !q.alternativas.every((alt) => typeof alt === "string" && alt.trim()) ||
        (typeof q.correta === "string" && !/^[A-Za-z]$/.test(q.correta)) ||
        !Number.isInteger(correta) || correta < 1 || correta > q.alternativas.length) {
      throw new Error(`Questão inválida na fonte ${fonte}.`);
    }
    ids.add(String(q.id));
    return { id: `${fonte}:${q.id}`, ano: q.ano, materia: normalizarMateria(materia), questao, alternativas: q.alternativas, correta };
  });
}

async function carregarFonte(url, fonte, signal) {
  const resposta = await fetch(url, { signal });
  if (!resposta.ok) throw new Error(`Falha HTTP ${resposta.status} em ${fonte}.`);
  return normalizarQuestoes(await resposta.json(), fonte);
}

export async function carregarQuestoes(signal) {
  const remotoController = new AbortController();
  const cancelarRemoto = () => remotoController.abort();
  if (signal?.aborted) cancelarRemoto();
  else signal?.addEventListener("abort", cancelarRemoto, { once: true });
  const limite = setTimeout(cancelarRemoto, 8000);
  const [local, remoto] = await Promise.allSettled([
    carregarFonte(`${import.meta.env?.BASE_URL || "/"}questoes.json`, "local", signal),
    carregarFonte(URL_REMOTA, "remoto", remotoController.signal),
  ]);
  clearTimeout(limite);
  signal?.removeEventListener("abort", cancelarRemoto);
  return {
    questoes: [...(local.status === "fulfilled" ? local.value : []), ...(remoto.status === "fulfilled" ? remoto.value : [])],
    falhas: [local.status === "rejected" && "local", remoto.status === "rejected" && "remoto"].filter(Boolean),
  };
}
