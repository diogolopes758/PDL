import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <main className="home-container">
        <h1 className="home-title">Bora turbinar os estudos?</h1>

        <p className="home-text">
          Bem-vindo ao PDL — o seu espaço de evolução. Aqui, cada minuto de
          estudo vale mais do que parece. Não é sobre decorar conteúdo, é sobre
          construir o futuro que você quer viver...
        </p>

        <p className="home-text">
          Estudar não é fácil — e ninguém aqui finge que é. Mas é justamente por
          isso que tem valor...
        </p>

        <p className="home-text">
          O PDL existe pra te lembrar disso. Pra te apoiar, te organizar...
        </p>

        <p className="home-text">
          O futuro que você quer começa com a decisão que você toma hoje.
        </p>

        <p className="home-text">Bora construir essa mudança juntos.</p>

        <div className="home-btn-container">
          <Link to="/materias" className="home-btn">
            Começar meu novo futuro
          </Link>
        </div>
      </main>
    </div>
  );
}
