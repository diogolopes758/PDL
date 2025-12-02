import { useEffect, useState } from "react";

export default function Questoes() {
  const [questoes, setQuestoes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://api.enem.dev/v1/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestoes(data.questions);
        setCarregando(false);
      })
      .catch(() => setCarregando(false));
  }, []);

  if (carregando) return <p>Carregando questões...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ color: "white" }}>Questões do ENEM</h1>

      {questoes.map((q) => (
        <div
          key={q.id}
          style={{
            background: "#111",
            border: "1px solid #333",
            padding: "20px",
            marginTop: "25px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <h3>
            {q.year} • {q.subject}
          </h3>

          <p style={{ marginTop: "15px" }}>{q.statement}</p>

          <ul style={{ marginTop: "15px" }}>
            {q.alternatives.map((alt, i) => (
              <li key={i}>{alt}</li>
            ))}
          </ul>

          <details style={{ marginTop: "15px", cursor: "pointer" }}>
            <summary>Ver resposta</summary>
            <p style={{ marginTop: "10px" }}>
              Alternativa correta: {q.answer + 1}
            </p>
          </details>
        </div>
      ))}
    </div>
  );
}
