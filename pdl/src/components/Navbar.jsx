import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">PDL</h1>

        {/* Botão Mobile */}
        <button className="menu-button" onClick={() => setOpen(!open)}>
          {open ? "Fechar" : "Menu"}
        </button>

        {/* Links Desktop */}
        <nav className="nav-desktop">
          <Link to="/">Início</Link>
          <Link to="/materias">Matérias</Link>
          <Link to="/questoes">Questões</Link>
          {/* <Link to="/simulados">Simulados</Link> */}
          <Link to="/redacoes">Redações</Link>
          <Link to="/desempenho">Meu Desempenho</Link>
          <Link to="/pomodoro">Pomodoro</Link>
        </nav>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="nav-mobile">
          <Link to="/" onClick={() => setOpen(false)}>
            Início
          </Link>
          <Link to="/materias" onClick={() => setOpen(false)}>
            Matérias
          </Link>
          <Link to="/simulados" onClick={() => setOpen(false)}>
            Simulados
          </Link>
        </nav>
      )}
    </header>
  );
}
