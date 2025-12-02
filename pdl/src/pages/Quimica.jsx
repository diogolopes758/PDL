import "./Quimica.css";

export default function Quimica() {
  return (
    <div className="quimica-page">
      <header className="quimica-header">
        <h1>Química</h1>
        <p>
          Explore as transformações da matéria, reações químicas, propriedades,
          cálculos estequiométricos e todos os conteúdos essenciais para o ENEM.
        </p>
      </header>

      <section className="quimica-modulos">
        <h2 className="section-title">Conteúdos da Matéria</h2>

        <div className="modulos-grid">
          <div className="modulo-card">
            <h3>🧱 Estrutura da Matéria</h3>
            <p>Átomos, partículas, tabela periódica e modelos atômicos.</p>
          </div>

          <div className="modulo-card">
            <h3>⚗ Ligações Químicas</h3>
            <p>Iônicas, covalentes, metálicas e polaridade.</p>
          </div>

          <div className="modulo-card">
            <h3>🧪 Reações Químicas</h3>
            <p>Tipos de reações, balanceamento e equações químicas.</p>
          </div>

          <div className="modulo-card">
            <h3>📐 Estequiometria</h3>
            <p>Mols, massas, volumes e cálculos essenciais.</p>
          </div>

          <div className="modulo-card">
            <h3>🔥 Termoquímica</h3>
            <p>Entalpia, endotérmicas, exotérmicas e energia.</p>
          </div>

          <div className="modulo-card">
            <h3>🧴 Soluções</h3>
            <p>Concentração, diluição, solubilidade e misturas.</p>
          </div>

          <div className="modulo-card">
            <h3>📉 Cinética Química</h3>
            <p>Velocidade das reações e fatores que influenciam.</p>
          </div>

          <div className="modulo-card">
            <h3>⚖ Equilíbrio Químico</h3>
            <p>Constante, deslocamento e princípios fundamentais.</p>
          </div>

          <div className="modulo-card">
            <h3>🧼 Química Orgânica</h3>
            <p>Cadeias, funções orgânicas e reações básicas.</p>
          </div>
        </div>
      </section>

      <section className="quimica-btn-area">
        <button className="btn-estudar">Começar a estudar</button>
      </section>
    </div>
  );
}
