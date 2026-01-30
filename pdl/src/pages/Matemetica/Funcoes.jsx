import "./Funcoes.css";

export default function Funcoes() {
  return (
    <div className="funcoes-page">
      {/* HEADER */}
      <header className="funcoes-header">
        <h1>Funções</h1>
        <p>
          Entenda como funcionam as principais funções matemáticas cobradas no
          ENEM.
        </p>
      </header>

      {/* MENU DE TÓPICOS */}
      <nav className="funcoes-menu">
        <button>Função Afim</button>
        <button>Função Quadrática</button>
        <button>Função Exponencial</button>
        <button>Função Logarítmica</button>
      </nav>

      {/* CONTEÚDO */}
      <section className="funcoes-content">
        {/* INTRO */}
        <article className="funcoes-card">
          <h2>O que é uma Função?</h2>
          <p>
            Uma função é uma relação matemática que associa cada valor de um
            conjunto a um único valor em outro conjunto.
          </p>
        </article>

        {/* AFIM */}
        <article className="funcoes-card">
          <h2>Função Afim</h2>
          <p>
            Uma função relaciona cada elemento de um conjunto (domínio) a um
            único valor em outro conjunto (imagem). <br />
            ▫️ Função Afim Forma geral:
            <br />
            𝑓 ( 𝑥 ) = 𝑎 𝑥 + 𝑏 <br />
            f(x)=ax+b <br />
            ° a: coeficiente angular (inclinação da reta) <br />
            ° b: coeficiente linear (onde a reta corta o eixo y) <br />
            <br />
            📌 Usada para modelar crescimento ou decrescimento constante.
          </p>
        </article>

        {/* QUADRÁTICA */}
        <article className="funcoes-card">
          <h2>Função Quadrática</h2>
          <p>
            ▫️ Forma geral: 𝑓 ( 𝑥 ) = 𝑎 𝑥² + 𝑏 𝑥 + 𝑐 <br />
            <br />
            ° O gráfico é uma parábola
            <br /> ° Se a for menor que 0, a parábola é voltada para cima <br />
            ° Se a for maior que 0, é voltada para baixo <br />
            <br />
            📌 Muito comum em problemas de máximo e mínimo.
          </p>
        </article>

        {/* EXPONENCIAL */}
        <article className="funcoes-card">
          <h2>Função Exponencial</h2>
          <p>
            ▫️ Forma geral: 𝑓 ( 𝑥 ) = 𝑎 ⋅ 𝑏 𝑥² <br />
            <br />
            ° Quando b for maior que 1, há crescimento rápido
            <br />
            ° Quando 0 formenor que b maior que 1, há decrescimento <br />
            <br />
            📌 Aplicações: crescimento populacional, juros compostos, epidemias.
          </p>
        </article>

        {/* LOGARÍTMICA */}
        <article className="funcoes-card">
          <h2>Função Logarítmica</h2>
          <p>
            ▫️ Função Logarítmica É a inversa da função exponencial. <br />
            ° log ⁡𝑏 ( 𝑥 ) = 𝑦 ⟺ b^y = 𝑥 <br />
            <br />
            📌 Usada para lidar com grandes variações, como escalas e taxas.
          </p>
        </article>
      </section>
    </div>
  );
}
