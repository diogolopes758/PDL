import "./Portugues.css";

export default function Portugues() {
  return (
    <div className="port-page">
      <header className="port-header">
        <h1>Português / Linguagens</h1>
        <p>
          Domine interpretação de texto, gramática e discurso — conteúdos que
          fazem toda a diferença no ENEM.
        </p>
      </header>

      <section className="port-modulos">
        <h2 className="section-title">O que você vai estudar</h2>

        <div className="modulos-grid">
          <div className="modulo-card">
            <h3>📘 Interpretação de Texto</h3>
            <p>Aprenda a entender textos, intenções e argumentos.</p>
          </div>

          <div className="modulo-card">
            <h3>📝 Gramática</h3>
            <p>Classes de palavras, sintaxe, regência e concordância.</p>
          </div>

          <div className="modulo-card">
            <h3>💬 Figuras de Linguagem</h3>
            <p>Metáfora, ironia, hipérbole e mais.</p>
          </div>

          <div className="modulo-card">
            <h3>📚 Gêneros Textuais</h3>
            <p>Normas, características e aplicação no ENEM.</p>
          </div>

          <div className="modulo-card">
            <h3>🎭 Análise de discurso</h3>
            <p>Contexto, intenção e sentido implícito.</p>
          </div>
        </div>
      </section>

      {/* <section className="port-btn-area">
        <button className="btn-estudar">Começar a estudar</button>
      </section> */}
    </div>
  );
}
