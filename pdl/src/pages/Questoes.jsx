import { useEffect, useState } from "react";
import "./Questoes.css";
import { carregarQuestoes } from "../services/questoes";

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
  const areasPorMateria = {
    matematica: "matematica", biologia: "natureza", fisica: "natureza", quimica: "natureza",
    historia: "humanas", geografia: "humanas", filosofia: "humanas", sociologia: "humanas",
    portugues: "linguagens", linguagens: "linguagens",
  };
  const areaDashboard = areasPorMateria[area];
  if (areaDashboard) dados.areas[areaDashboard] = (dados.areas[areaDashboard] || 0) + 1;
  salvarDesempenho(dados);
}

function registrarErro() {
  const dados = getDesempenho();
  dados.errosTotais++;
  salvarDesempenho(dados);
}

export default function Questoes() {
  const [questoes, setQuestoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [falhas, setFalhas] = useState([]);

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
    const controller = new AbortController();
    carregarQuestoes(controller.signal).then((resultado) => {
      if (controller.signal.aborted) return;
      setQuestoes(resultado.questoes);
      setFalhas(resultado.falhas);
      setCarregando(false);
    });
    return () => controller.abort();
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
      registrarErro();
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
      {carregando && <p role="status">Carregando questões...</p>}
      {!carregando && falhas.includes("remoto") && <p role="status">Não foi possível carregar as questões externas.</p>}
      {!carregando && falhas.includes("local") && <p role="status">Não foi possível carregar o banco local de questões.</p>}

      {/* -------------------- SIMULADO -------------------- */}
      <div className="simulado-box">
        {!modoSimulado && (
          <button className="btn-simulado" onClick={iniciarSimulado} disabled={carregando || questoes.length === 0}>
            🎯 Iniciar simulado (até 10 questões)
          </button>
        )}

        {modoSimulado && !finalSimulado && (
          <>
            <h2>Simulado — {questoesSimulado.length} questões</h2>

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
            <p>Acertos: {totalAcertosSimulado} de {questoesSimulado.length}</p>
            <p>
              Percentual: {(questoesSimulado.length ? (totalAcertosSimulado / questoesSimulado.length) * 100 : 0).toFixed(1)}%
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
              onChange={(e) => { setFiltroAno(e.target.value); setPagina(1); }}
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
              onChange={(e) => { setFiltroMateria(e.target.value); setPagina(1); }}
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
              onChange={(e) => { setBusca(e.target.value); setPagina(1); }}
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

          {!carregando && questoesFiltradas.length === 0 && <p>Nenhuma questão encontrada.</p>}

          {/* paginação */}
          <div className="pagination">
            <button
              disabled={pagina <= 1}
              onClick={() => setPagina((p) => p - 1)}
            >
              ◀ Anterior
            </button>

            <span>
              Página {totalPaginas ? pagina : 0} de {totalPaginas}
            </span>

            <button
              disabled={pagina >= totalPaginas}
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
