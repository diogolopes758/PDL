import "./Biologia.css";

export default function Biologia() {
  return (
    <div className="bio-page">
      <header className="bio-header">
        <h1>Biologia</h1>
        <p>
          Entenda a vida em todos os seus níveis: células, ecossistemas,
          genética, evolução, fisiologia e tudo que o ENEM mais cobra.
        </p>
      </header>

      <section className="bio-modulos">
        <h2 className="section-title">Conteúdos da Matéria</h2>

        <div className="modulos-grid">
          <div className="modulo-card">
            <h3>🧫 Citologia</h3>
            <p>
              Organelas, metabolismo celular e funcionamento da vida
              microscópica.
            </p>
          </div>

          <div className="modulo-card">
            <h3>🧬 Genética</h3>
            <p>DNA, hereditariedade, cruzamentos e mutações.</p>
          </div>

          <div className="modulo-card">
            <h3>🌱 Ecologia</h3>
            <p>
              Relações ecológicas, ciclos biogeoquímicos e impactos ambientais.
            </p>
          </div>

          <div className="modulo-card">
            <h3>🦴 Fisiologia Humana</h3>
            <p>Sistemas do corpo, funcionamento e saúde.</p>
          </div>

          <div className="modulo-card">
            <h3>🧪 Bioquímica</h3>
            <p>Moléculas essenciais, reações metabólicas e enzimas.</p>
          </div>

          <div className="modulo-card">
            <h3>🧠 Evolução</h3>
            <p>Darwinismo, seleção natural e diversidade biológica.</p>
          </div>

          <div className="modulo-card">
            <h3>🧬 Biotecnologia</h3>
            <p>OGMs, clonagem, vacinas, PCR e aplicações modernas.</p>
          </div>

          <div className="modulo-card">
            <h3>🦠 Microbiologia</h3>
            <p>Vírus, bactérias, fungos e parasitologia.</p>
          </div>
        </div>
      </section>

      <section className="bio-btn-area">
        <button className="btn-estudar">Começar a estudar</button>
      </section>
    </div>
  );
}
