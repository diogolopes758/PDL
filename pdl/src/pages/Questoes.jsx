import { useEffect, useState } from "react";

export default function Questoes() {
  const [questoes, setQuestoes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("/questoes.json")
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao carregar questoes.json");
        return res.json();
      })
      .then((data) => {
        setQuestoes(data);
        setCarregando(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar questões locais:", err);
        setCarregando(false);
      });
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
            {q.ano} • {q.area}
          </h3>

          <p style={{ marginTop: "15px" }}>{q.questao}</p>

          <ul style={{ marginTop: "15px" }}>
            {q.alternativas.map((alt, i) => (
              <li key={i}>{alt}</li>
            ))}
          </ul>

          <details style={{ marginTop: "15px" }}>
            <summary>Ver resposta</summary>
            <p style={{ marginTop: "10px" }}>
              Alternativa correta: {q.correta}
            </p>
          </details>
        </div>
      ))}
    </div>
  );
}
