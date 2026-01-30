import "./Fisica.css";

export default function Fisica() {
  return (
    <div className="fisica-page">
      <header className="fisica-header">
        <h1>Física</h1>
        <p>
          Entenda as leis que regem o universo, os fenômenos naturais, os
          princípios fundamentais da energia e os temas que mais caem no ENEM.
        </p>
      </header>

      <section className="fisica-modulos">
        <h2 className="section-title">Conteúdos da Matéria</h2>

        <div className="modulos-grid">
          <li>
            <h3>📘 Cinemática</h3>{" "}
            <Link to="/cinematica" className="fisica-link">
              Cinemática Movimento, velocidade, aceleração e gráficos.{" "}
            </Link>
          </li>

          <div className="modulo-card">
            <h3>⚡ Dinâmica</h3>
            <p>Forças, Leis de Newton e aplicações no cotidiano.</p>
          </div>

          <div className="modulo-card">
            <h3>🔋 Energia & Trabalho</h3>
            <p>Energia mecânica, conservação e potência.</p>
          </div>

          <div className="modulo-card">
            <h3>🌡 Termologia</h3>
            <p>Calor, temperatura, dilatação e trocas térmicas.</p>
          </div>

          <div className="modulo-card">
            <h3>💡 Óptica</h3>
            <p>Lentes, espelhos, reflexão, refração e cores.</p>
          </div>

          <div className="modulo-card">
            <h3>🔌 Eletrodinâmica</h3>
            <p>Corrente, resistência, potência e circuitos elétricos.</p>
          </div>

          <div className="modulo-card">
            <h3>🧲 Eletromagnetismo</h3>
            <p>Campos elétricos e magnéticos, forças e aplicações.</p>
          </div>

          <div className="modulo-card">
            <h3>🎵 Ondulatória</h3>
            <p>Ondas, som, frequência, amplitude e fenômenos ondulatórios.</p>
          </div>
        </div>
      </section>

      <section className="fisica-btn-area">
        <button className="btn-estudar">Começar a estudar</button>
      </section>
    </div>
  );
}
