import "./Geometria.css";

export default function Geometria() {
  return (
    <div className="geometria-page">
      {/* HEADER */}
      <header className="geometria-header">
        <h1>Geometria</h1>
        <p>
          Conceitos essenciais de geometria plana e espacial mais cobrados no
          ENEM.
        </p>
      </header>

      {/* MENU DE TÓPICOS */}
      <nav className="geometria-menu">
        <button>Geometria Plana</button>
        <button>Áreas</button>
        <button>Perímetros</button>
        <button>Trigonometria</button>
      </nav>

      {/* CONTEÚDO */}
      <section className="geometria-content">
        {/* INTRO */}
        <article className="geometria-card">
          <h2>O que é Geometria?</h2>
          <p>
            A geometria estuda as formas, tamanhos, posições e propriedades dos
            objetos no espaço e no plano.
            <br />
            📌 No ENEM, aparece MUITO em problemas do cotidiano.
          </p>
        </article>

        {/* PLANA */}
        <article className="geometria-card">
          <h2>Geometria Plana</h2>
          <p>
            Estuda figuras planas, ou seja, que não têm volume.
            <br />
            ▫️ Triângulos
            <br />
            ▫️ Quadrados
            <br />
            ▫️ Retângulos
            <br />
            ▫️ Círculos
            <br />
            <br />
            📌 Foco em área, perímetro e ângulos.
          </p>
        </article>

        {/* ÁREA */}
        <article className="geometria-card">
          <h2>Áreas das Figuras</h2>
          <p>
            ▫️ Quadrado: A = l² <br />
            ▫️ Retângulo: A = b ⋅ h <br />
            ▫️ Triângulo: A = (b ⋅ h) / 2 <br />
            ▫️ Círculo: A = π ⋅ r² <br />
            <br />
            📌 Cai muito em problemas de terreno, pintura e construção.
          </p>
        </article>

        {/* PERÍMETRO */}
        <article className="geometria-card">
          <h2>Perímetro</h2>
          <p>
            Perímetro é a soma de todos os lados da figura.
            <br />
            <br />
            📌 Usado quando o problema fala em cercar, contornar ou delimitar.
          </p>
        </article>

        {/* TRIGONOMETRIA */}
        <article className="geometria-card">
          <h2>Trigonometria Básica</h2>
          <p>
            Relaciona ângulos e lados do triângulo retângulo.
            <br />
            ▫️ seno = cateto oposto / hipotenusa <br />
            ▫️ cosseno = cateto adjacente / hipotenusa <br />
            ▫️ tangente = cateto oposto / cateto adjacente <br />
            <br />
            📌 Muito comum em problemas com inclinação e rampas.
          </p>
        </article>
      </section>
    </div>
  );
}
