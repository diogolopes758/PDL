import { useEffect, useState } from "react";
import "./Questoes.css";

export default function Questoes() {
  const [questoes, setQuestoes] = useState([]);
  const [filtroAno, setFiltroAno] = useState("todos");
  const [filtroMateria, setFiltroMateria] = useState("todas");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("/questoes.json")
      .then((res) => res.json())
      .then((data) => setQuestoes(data))
      .catch((e) => console.error("Erro ao carregar questões:", e));
  }, []);

  const questoesFiltradas = questoes.filter((q) => {
    const passaAno = filtroAno === "todos" || q.ano === Number(filtroAno);
    const passaMateria =
      filtroMateria === "todas" || q.materia === filtroMateria;

    const passaBusca =
      busca.length === 0 ||
      q.questao.toLowerCase().includes(busca.toLowerCase());

    return passaAno && passaMateria && passaBusca;
  });

  const anos = [...new Set(questoes.map((q) => q.ano))].sort().reverse();
  const materias = [...new Set(questoes.map((q) => q.materia))];

  return (
    <div className="questoes-container">
      <h1 className="questoes-title">Questões do ENEM</h1>

      {/* FILTROS */}
      <div className="filtros-box">
        <select
          value={filtroAno}
          onChange={(e) => setFiltroAno(e.target.value)}
        >
          <option value="todos">Todos os anos</option>
          {anos.map((ano) => (
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
          {materias.map((m) => (
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

      {/* LISTA DE QUESTÕES */}
      {questoesFiltradas.map((q) => (
        <div key={q.id} className="card-questao">
          <h3>
            {q.ano} • {q.materia.toUpperCase()}
          </h3>

          <p>{q.questao}</p>

          <ul>
            {q.alternativas.map((alt, i) => (
              <li key={i}>{alt}</li>
            ))}
          </ul>

          <details>
            <summary>Ver resposta</summary>
            <p>Alternativa correta: {q.correta}</p>
          </details>
        </div>
      ))}
    </div>
  );
}
