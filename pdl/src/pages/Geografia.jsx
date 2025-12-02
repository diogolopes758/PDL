import "./Geografia.css";

export default function Geografia() {
  return (
    <div className="geo-page">
      <header className="geo-header">
        <h1>Geografia</h1>
        <p>
          Entenda o espaço geográfico, suas dinâmicas, a relação entre sociedade
          e natureza, os conflitos mundiais e os temas que mais caem no ENEM.
        </p>
      </header>

      <section className="geo-modulos">
        <h2 className="section-title">Conteúdos da Matéria</h2>

        <div className="modulos-grid">
          <div className="modulo-card">
            <h3>🌎 Geopolítica</h3>
            <p>Conflitos, acordos internacionais e dinâmica global.</p>
          </div>

          <div className="modulo-card">
            <h3>🗺 Cartografia</h3>
            <p>Mapas, escalas, coordenadas e projeções cartográficas.</p>
          </div>

          <div className="modulo-card">
            <h3>🏭 Indústria & Economia</h3>
            <p>Globalização, industrialização e blocos econômicos.</p>
          </div>

          <div className="modulo-card">
            <h3>🌋 Meio Ambiente</h3>
            <p>Impactos ambientais, clima, vegetação e biomas.</p>
          </div>

          <div className="modulo-card">
            <h3>🏞 Geografia do Brasil</h3>
            <p>Regiões, população, economia e estrutura do território.</p>
          </div>

          <div className="modulo-card">
            <h3>👥 População e Migrações</h3>
            <p>Demografia, fluxos migratórios e urbanização.</p>
          </div>
        </div>
      </section>

      <section className="geo-btn-area">
        <button className="btn-estudar">Começar a estudar</button>
      </section>
    </div>
  );
}
