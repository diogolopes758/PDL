import "./FiloSoci.css";

export default function FiloSoci() {
  return (
    <div className="fs-page">
      <header className="fs-header">
        <h1>Filosofia & Sociologia</h1>
        <p>
          Explore as ideias que moldam a sociedade, os pensamentos que
          transformaram o mundo e as reflexões essenciais para interpretar o
          comportamento humano — tudo com foco no ENEM.
        </p>
      </header>

      <section className="fs-section">
        <h2 className="section-title">Conteúdos de Filosofia</h2>

        <div className="fs-grid">
          <div className="fs-card">
            <h3>📜 Filosofia Antiga</h3>
            <p>
              Sócrates, Platão, Aristóteles e o nascimento do pensamento
              racional.
            </p>
          </div>

          <div className="fs-card">
            <h3>🏛 Filosofia Medieval</h3>
            <p>Agostinho, Tomás de Aquino e a síntese entre fé e razão.</p>
          </div>

          <div className="fs-card">
            <h3>📚 Filosofia Moderna</h3>
            <p>
              Descartes, Locke, Hume, Kant e a base do pensamento contemporâneo.
            </p>
          </div>

          <div className="fs-card">
            <h3>🧠 Filosofia Contemporânea</h3>
            <p>
              Nietzsche, Sartre, Arendt e debates sobre liberdade e existência.
            </p>
          </div>

          <div className="fs-card">
            <h3>🤝 Ética & Moral</h3>
            <p>Como as ações humanas são avaliadas na sociedade.</p>
          </div>
        </div>
      </section>

      <section className="fs-section">
        <h2 className="section-title">Conteúdos de Sociologia</h2>

        <div className="fs-grid">
          <div className="fs-card">
            <h3>🏙 Formação da Sociedade</h3>
            <p>As bases sociais e políticas que estruturam a vida em grupo.</p>
          </div>

          <div className="fs-card">
            <h3>⚖ Estratificação Social</h3>
            <p>Desigualdade, classes sociais e mobilidade social.</p>
          </div>

          <div className="fs-card">
            <h3>📢 Cultura & Identidade</h3>
            <p>Construção cultural, etnia, gênero e diversidade.</p>
          </div>

          <div className="fs-card">
            <h3>🏛 Poder & Política</h3>
            <p>Estado, democracia, cidadania e sistemas políticos.</p>
          </div>

          <div className="fs-card">
            <h3>📡 Mídia & Sociedade</h3>
            <p>Comunicação de massa, redes sociais e comportamento coletivo.</p>
          </div>
        </div>
      </section>

      <section className="fs-btn-area">
        <button className="fs-btn">Começar a estudar</button>
      </section>
    </div>
  );
}
