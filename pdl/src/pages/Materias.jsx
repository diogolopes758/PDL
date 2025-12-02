import { Link } from "react-router-dom";
import "./Materias.css";

export default function Materias() {
  const materias = [
    {
      nome: "Matemática",
      imagem: "/img/mat.jpg",
      cor: "#b30808ff",
      rota: "/materias/matematica",
    },
    {
      nome: "Português",
      imagem: "/img/pot.png",
      cor: "#1b0599ff",
      rota: "/materias/portugues",
    },
    {
      nome: "História",
      imagem: "/img/hist.jpg",
      cor: "#f97316",
      rota: "/materias/historia",
    },
    {
      nome: "Geografia",
      imagem: "/img/geo.jpg",
      cor: "#0b8507ff",
      rota: "/materias/geografia",
    },
    {
      nome: "Física",
      imagem: "/img/fis.jpg",
      cor: "#1460b8ff",
      rota: "/materias/fisica",
    },
    {
      nome: "Química",
      imagem: "/img/qui.jpg",
      cor: "#e433b7ff",
      rota: "/materias/quimica",
    },
    {
      nome: "Biologia",
      imagem: "/img/bio.jpg",
      cor: "#920a9eff",
      rota: "/materias/biologia",
    },
    {
      nome: "Filosofia/sociologia",
      imagem: "/img/filo.jpg",
      cor: "#ece919ff",
      rota: "/materias/filoSoci",
    },
  ];

  return (
    <div className="materias-page">
      <h1 className="materias-titulo">Matérias</h1>

      <div className="materias-grid">
        {materias.map((m) => (
          <Link key={m.nome} to={m.rota} className="card-link">
            <div className="card-materia" style={{ borderColor: m.cor }}>
              <img src={m.imagem} alt={m.nome} className="card-img" />
              <h2>{m.nome}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
