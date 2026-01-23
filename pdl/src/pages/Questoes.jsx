import { useEffect, useState } from "react";
import "./Questoes.css";

function getDesempenho() {
  return (
    JSON.parse(localStorage.getItem("desempenhoUsuario")) || {
      acertosTotais: 0,
      errosTotais: 0,
      areas: {
        Linguagens: 0,
        Humanas: 0,
        Natureza: 0,
        Matemática: 0,
        Redação: 0,
      },
    }
  );
}

function salvarDesempenho(data) {
  localStorage.setItem("desempenhoUsuario", JSON.stringify(data));
}

function registrarAcerto(area) {
  const dados = getDesempenho();
  dados.acertosTotais++;
  dados.areas[area] = (dados.areas[area] || 0) + 1;
  salvarDesempenho(dados);
}

function registrarErro(area) {
  const dados = getDesempenho();
  dados.errosTotais++;
  salvarDesempenho(dados.area[area]);
}

export default function Questoes() {
  const [questoes, setQuestoes] = useState([]);

  // FILTROS
  const [filtroAno, setFiltroAno] = useState("todos");
  const [filtroMateria, setFiltroMateria] = useState("todas");
  const [busca, setBusca] = useState("");

  // PAGINAÇÃO
  const [pagina, setPagina] = useState(1);
  const porPagina = 20;

  // RESPOSTAS
  const [respostas, setRespostas] = useState({});

  // SIMULADO
  const [modoSimulado, setModoSimulado] = useState(false);
  const [questoesSimulado, setQuestoesSimulado] = useState([]);
  const [finalSimulado, setFinalSimulado] = useState(false);

  useEffect(() => {
    fetch("/questoes.json")
      .then((res) => res.json())
      .then((data) => setQuestoes(data))
      .catch((e) => console.error("Erro ao carregar questões:", e));
  }, []);

  // --- Função de filtro ---
  const questoesFiltradas = questoes.filter((q) => {
    const passaAno = filtroAno === "todos" || q.ano === Number(filtroAno);
    const passaMateria =
      filtroMateria === "todas" || q.materia === filtroMateria;
    const passaBusca =
      !busca || q.questao.toLowerCase().includes(busca.toLowerCase());
    return passaAno && passaMateria && passaBusca;
  });

  // --- Paginação real ---
  const totalPaginas = Math.ceil(questoesFiltradas.length / porPagina);
  const inicio = (pagina - 1) * porPagina;
  const paginaAtual = questoesFiltradas.slice(inicio, inicio + porPagina);

  // --- Registrar respostas ---
  const responder = (idQuestao, alternativa) => {
    // Já respondeu antes? Não registra de novo.
    const jaRespondeu = respostas[idQuestao] !== undefined;

    // Salva resposta
    setRespostas({
      ...respostas,
      [idQuestao]: alternativa,
    });

    if (jaRespondeu) return;

    // Descobre questão
    const questao = questoes.find((q) => q.id === idQuestao);
    if (!questao) return;

    const correta = questao.correta;

    // Registra desempenho
    if (alternativa === correta) {
      registrarAcerto(questao.materia);
    } else {
      registrarErro(questao.materia);
    }
  };

  // --- MODO SIMULADO ---
  const iniciarSimulado = () => {
    const aleatorias = [...questoes]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    setQuestoesSimulado(aleatorias);
    setModoSimulado(true);
    setFinalSimulado(false);
    setRespostas({});
  };

  const finalizarSimulado = () => {
    setFinalSimulado(true);
  };

  const totalAcertosSimulado = questoesSimulado.filter(
    (q) => respostas[q.id] === q.correta
  ).length;

  return (
    <div className="questoes-container">
      <h1 className="questoes-title">Questões do ENEM</h1>

      {/* -------------------- SIMULADO -------------------- */}
      <div className="simulado-box">
        {!modoSimulado && (
          <button className="btn-simulado" onClick={iniciarSimulado}>
            🎯 Iniciar simulado (180 questões)
          </button>
        )}

        {modoSimulado && !finalSimulado && (
          <>
            <h2>Simulado — 180 questões</h2>

            {questoesSimulado.map((q) => (
              <div key={q.id} className="card-questao">
                <h3>
                  {q.ano} • {q.materia.toUpperCase()}
                </h3>

                <p>{q.questao}</p>

                {q.alternativas.map((alt, i) => {
                  const usuario = respostas[q.id];
                  const correta = q.correta;

                  return (
                    <button
                      key={i}
                      className={`alternativa-btn
                        ${usuario === i + 1 && "marcada"}
                        ${
                          usuario &&
                          (i + 1 === correta
                            ? "correta"
                            : usuario === i + 1
                            ? "errada"
                            : "")
                        }
                      `}
                      onClick={() => responder(q.id, i + 1)}
                    >
                      {i + 1} {alt}
                    </button>
                  );
                })}
              </div>
            ))}

            <button className="btn-finalizar" onClick={finalizarSimulado}>
              Finalizar simulado
            </button>
          </>
        )}

        {finalSimulado && (
          <div className="resultado-box">
            <h2>Resultado</h2>
            <p>Acertos: {totalAcertosSimulado} de 10</p>
            <p>
              Percentual: {((totalAcertosSimulado / 180) * 100).toFixed(1)}%
            </p>

            <button onClick={iniciarSimulado} className="btn-simulado">
              Refazer simulado
            </button>

            <button className="btn-sair" onClick={() => setModoSimulado(false)}>
              Voltar às questões
            </button>
          </div>
        )}
      </div>

      {/* -------------------- LISTA NORMAL -------------------- */}
      {!modoSimulado && (
        <>
          {/* filtros */}
          <div className="filtros-box">
            <select
              value={filtroAno}
              onChange={(e) => setFiltroAno(e.target.value)}
            >
              <option value="todos">Todos os anos</option>
              {[...new Set(questoes.map((q) => q.ano))]
                .sort()
                .reverse()
                .map((ano) => (
                  <option key={ano} value={ano}>
                    {ano}
                  </option>
                ))}
            </select>

            <select
              value={filtroMateria}
              onChange={(e) => setFiltroMateria(e.target.value)}
            >
              <option value="todas">Todas as matérias</option>
              {[...new Set(questoes.map((q) => q.materia))].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Buscar na questão..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          {/* lista paginada */}
          {paginaAtual.map((q) => (
            <div key={q.id} className="card-questao">
              <h3>
                {q.ano} • {q.materia.toUpperCase()}
              </h3>

              <p>{q.questao}</p>

              {q.alternativas.map((alt, i) => {
                const usuario = respostas[q.id];
                const correta = q.correta;

                return (
                  <button
                    key={i}
                    className={`alternativa-btn
                        ${usuario === i + 1 && "marcada"}
                        ${
                          usuario &&
                          (i + 1 === correta
                            ? "correta"
                            : usuario === i + 1
                            ? "errada"
                            : "")
                        }
                      `}
                    onClick={() => responder(q.id, i + 1)}
                  >
                    {i + 1}) {alt}
                  </button>
                );
              })}
            </div>
          ))}

          {/* paginação */}
          <div className="pagination">
            <button
              disabled={pagina === 1}
              onClick={() => setPagina((p) => p - 1)}
            >
              ◀ Anterior
            </button>

            <span>
              Página {pagina} de {totalPaginas}
            </span>

            <button
              disabled={pagina === totalPaginas}
              onClick={() => setPagina((p) => p + 1)}
            >
              Próxima ▶
            </button>
          </div>
        </>
      )}
    </div>
  );
}
