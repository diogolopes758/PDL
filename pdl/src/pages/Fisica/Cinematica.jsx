import "./Cinematica.css";

export default function Cinematica() {
  return (
    <div className="cinematica-page">
      {/* HEADER */}
      <header className="cinematica-header">
        <h1>Cinemática</h1>
        <p>
          Estudo do movimento dos corpos sem considerar as causas do movimento.
        </p>
      </header>

      {/* MENU DE TÓPICOS */}
      <nav className="cinematica-menu">
        <button>Movimento</button>
        <button>Velocidade</button>
        <button>Aceleração</button>
        <button>MRU</button>
        <button>MRUV</button>
      </nav>

      {/* CONTEÚDO */}
      <section className="cinematica-content">
        {/* INTRO */}
        <article className="cinematica-card">
          <h2>O que é Cinemática?</h2>
          <p>
            A cinemática é a parte da física que descreve o movimento dos
            corpos, sem se preocupar com as forças que o causam.
            <br />
            📌 No ENEM, interpretação do enunciado é tudo.
          </p>
        </article>

        {/* MOVIMENTO */}
        <article className="cinematica-card">
          <h2>Movimento</h2>
          <p>
            Um corpo está em movimento quando sua posição muda em relação a um
            referencial.
            <br />
            <br />
            ▫️ Repouso e movimento dependem do referencial escolhido.
          </p>
        </article>

        {/* VELOCIDADE */}
        <article className="cinematica-card">
          <h2>Velocidade Média</h2>
          <p>
            Mede o quanto o corpo se desloca em um intervalo de tempo.
            <br />
            <br />
            ▫️ v = Δs / Δt <br />
            <br />
            📌 Unidade padrão: m/s (mas o ENEM ama km/h).
          </p>
        </article>

        {/* ACELERAÇÃO */}
        <article className="cinematica-card">
          <h2>Aceleração</h2>
          <p>
            Indica a variação da velocidade ao longo do tempo.
            <br />
            <br />
            ▫️ a = Δv / Δt <br />
            <br />
            📌 Pode ser positiva, negativa ou nula.
          </p>
        </article>

        {/* MRU */}
        <article className="cinematica-card">
          <h2>Movimento Retilíneo Uniforme (MRU)</h2>
          <p>
            Movimento com velocidade constante e aceleração nula.
            <br />
            <br />
            ▫️ s = s₀ + v ⋅ t <br />
            <br />
            📌 Gráfico: posição × tempo é uma reta.
          </p>
        </article>

        {/* MRUV */}
        <article className="cinematica-card">
          <h2>Movimento Retilíneo Uniformemente Variado (MRUV)</h2>
          <p>
            Movimento com aceleração constante.
            <br />
            <br />
            ▫️ v = v₀ + a ⋅ t <br />
            ▫️ s = s₀ + v₀t + (a ⋅ t²) / 2 <br />
            <br />
            📌 Gráficos caem MUITO no ENEM.
          </p>
        </article>
      </section>
    </div>
  );
}
