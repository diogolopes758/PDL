import "./Mat.css";

export default function Mat() {
  return (
    <div className="mat-page">
      {/* Capa da Matéria */}
      <div className="mat-hero">
        <img
          src="/img/matematica.jpg"
          alt="Matemática"
          className="mat-hero-img"
        />
        <div className="mat-hero-overlay">
          <h1>Matemática</h1>
          <p>A base lógica para dominar o ENEM.</p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="mat-conteudo">
        <section className="mat-section">
          <h2>Conteúdos Principais</h2>
          <ul>
            <li>📘 Conjuntos e Operações</li>
            <li>📘 Funções (afim, quadrática, exponencial e log)</li>
            <li>📘 Geometria Plana</li>
            <li>📘 Geometria Espacial</li>
            <li>📘 Estatística e Probabilidade</li>
            <li>📘 Porcentagem e Juros</li>
          </ul>
        </section>

        <section className="mat-section">
          <h2>Exercícios</h2>
          <p className="mat-desc">
            Em breve você poderá resolver questões do ENEM com correção
            automática!
          </p>
          <button className="mat-btn">Ver exercícios</button>
        </section>

        <section className="mat-section">
          <h2>Vídeos Recomendados</h2>
          <div className="mat-videos">
            <div className="video-card"></div>
            <div className="video-card"></div>
            <div className="video-card"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
