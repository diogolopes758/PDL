import "./Redacoes.css";

export default function Redacoes() {
  const opcoes = [
    {
      titulo: "Enviar Redação para Correção",
      desc: "Envie sua redação e receba correção detalhada.",
      link: "#",
    },
    {
      titulo: "Minhas Redações",
      desc: "Acompanhe o histórico e evolução das suas redações.",
      link: "#",
    },
    {
      titulo: "Redações Nota 1000",
      desc: "Veja referências de redações que atingiram a nota máxima.",
      link: "#",
    },
  ];

  return (
    <div className="redacoes-page">
      <h1 className="redacoes-titulo">Redações & Correções</h1>

      <p className="redacoes-sub">
        Melhore sua escrita com correções detalhadas, exemplos nota 1000 e
        acompanhamento completo.
      </p>

      <div className="redacoes-grid">
        {opcoes.map((op) => (
          <div key={op.titulo} className="redacao-card">
            <h2>{op.titulo}</h2>
            <p>{op.desc}</p>
            <a href={op.link} className="btn-card">
              Entrar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
