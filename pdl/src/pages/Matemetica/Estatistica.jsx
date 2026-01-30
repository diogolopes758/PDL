import "./Estatistica.css";

export default function Estatistica() {
  return (
    <div className="estatistica-page">
      {/* HEADER */}
      <header className="estatistica-header">
        <h1>Estatística</h1>
        <p>
          Interpretação de dados, gráficos e medidas estatísticas cobradas no
          ENEM.
        </p>
      </header>

      {/* MENU DE TÓPICOS */}
      <nav className="estatistica-menu">
        <button>Média</button>
        <button>Moda</button>
        <button>Mediana</button>
        <button>Gráficos</button>
        <button>Probabilidade</button>
      </nav>

      {/* CONTEÚDO */}
      <section className="estatistica-content">
        {/* INTRO */}
        <article className="estatistica-card">
          <h2>O que é Estatística?</h2>
          <p>
            A estatística estuda a coleta, organização, análise e interpretação
            de dados.
            <br />
            📌 No ENEM, o foco é entender o gráfico e tirar conclusões lógicas.
          </p>
        </article>

        {/* MÉDIA */}
        <article className="estatistica-card">
          <h2>Média Aritmética</h2>
          <p>
            Soma de todos os valores dividida pela quantidade.
            <br />
            <br />
            ▫️ Média = (x₁ + x₂ + ... + xₙ) / n <br />
            <br />
            📌 Cuidado: valores extremos podem distorcer a média.
          </p>
        </article>

        {/* MODA */}
        <article className="estatistica-card">
          <h2>Moda</h2>
          <p>
            É o valor que mais se repete no conjunto de dados.
            <br />
            <br />
            📌 Pode não existir ou existir mais de uma moda.
          </p>
        </article>

        {/* MEDIANA */}
        <article className="estatistica-card">
          <h2>Mediana</h2>
          <p>
            Valor central dos dados ordenados.
            <br />
            <br />
            ▫️ Quantidade ímpar → valor do meio <br />
            ▫️ Quantidade par → média dos dois centrais <br />
            <br />
            📌 Muito usada quando há valores extremos.
          </p>
        </article>

        {/* GRÁFICOS */}
        <article className="estatistica-card">
          <h2>Gráficos</h2>
          <p>
            ▫️ Gráfico de barras <br />
            ▫️ Gráfico de setores (pizza) <br />
            ▫️ Gráfico de linhas <br />
            <br />
            📌 Leia títulos, legendas, eixos e unidades com atenção.
          </p>
        </article>

        {/* PROBABILIDADE */}
        <article className="estatistica-card">
          <h2>Probabilidade</h2>
          <p>
            Mede a chance de um evento acontecer.
            <br />
            <br />
            ▫️ P(A) = casos favoráveis / casos possíveis <br />
            <br />
            📌 Normalmente ligada a jogos, sorteios e situações do dia a dia.
          </p>
        </article>
      </section>
    </div>
  );
}
