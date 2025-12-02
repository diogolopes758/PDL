import "./Historia.css";

export default function Historia() {
  return (
    <div className="hist-page">
      <header className="hist-header">
        <h1>História</h1>
        <p>
          Entenda os processos que moldaram o mundo, os movimentos sociais, as
          revoluções e as transformações que caem no ENEM todos os anos.
        </p>
      </header>

      <section className="hist-modulos">
        <h2 className="section-title">Conteúdos da Matéria</h2>

        <div className="modulos-grid">
          <div className="modulo-card">
            <h3>🏛 História Antiga</h3>
            <p>Egito, Grécia, Roma e sociedades orientais.</p>
          </div>

          <div className="modulo-card">
            <h3>⚔ Idade Média</h3>
            <p>Feudalismo, Igreja, cruzadas e formação dos reinos.</p>
          </div>

          <div className="modulo-card">
            <h3>🏰 Idade Moderna</h3>
            <p>Renascimento, absolutismo, reformas e revoluções.</p>
          </div>

          <div className="modulo-card">
            <h3>🌎 Idade Contemporânea</h3>
            <p>Guerras mundiais, conflitos e globalização.</p>
          </div>

          <div className="modulo-card">
            <h3>🇧🇷 História do Brasil</h3>
            <p>Colônia, Império, República, ditadura e atualidades.</p>
          </div>

          <div className="modulo-card">
            <h3>📜 Movimentos Sociais</h3>
            <p>Direitos civis, lutas populares e transformações políticas.</p>
          </div>
        </div>
      </section>

      <section className="hist-btn-area">
        <button className="btn-estudar">Começar a estudar</button>
      </section>
    </div>
  );
}
