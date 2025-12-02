import "./Simulados.css";
import Navbar from "../components/Navbar";

export default function Simulados() {
  <Navbar />;
  const simulados = [
    { titulo: "Simulado ENEM Completo", questoes: 180, dificuldade: "Difícil" },
    { titulo: "Simulado Matemática", questoes: 45, dificuldade: "Médio" },
    { titulo: "Simulado Linguagens", questoes: 45, dificuldade: "Médio" },
    { titulo: "Simulado Ciências Humanas", questoes: 45, dificuldade: "Fácil" },
    {
      titulo: "Simulado Ciências da Natureza",
      questoes: 45,
      dificuldade: "Médio",
    },
  ];

  return (
    <div className="simulados-page">
      <h1 className="simulados-titulo">Simulados</h1>

      <div className="simulados-grid">
        {simulados.map((s) => (
          <div className="simulado-card" key={s.titulo}>
            <h2>{s.titulo}</h2>
            <p>{s.questoes} questões</p>
            <span className="tag">{s.dificuldade}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
