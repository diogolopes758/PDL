import "./Desempenho.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

export default function Desempenho() {
  // --- DADOS TEMPORÁRIOS (TROCAR PELO BACKEND DEPOIS) ---
  const resumo = {
    acertos: 72,
    horasHoje: 2.5,
    mediaSemanal: 12,
  };

  const desempenhoAreas = [
    { area: "Linguagens", nota: 68 },
    { area: "Humanas", nota: 75 },
    { area: "Natureza", nota: 61 },
    { area: "Matemática", nota: 54 },
    { area: "Redação", nota: 80 },
  ];

  const horasSemana = [
    { dia: "Seg", horas: 2 },
    { dia: "Ter", horas: 1.5 },
    { dia: "Qua", horas: 3 },
    { dia: "Qui", horas: 2.5 },
    { dia: "Sex", horas: 1 },
    { dia: "Sab", horas: 4 },
    { dia: "Dom", horas: 0.5 },
  ];

  return (
    <div className="desempenho-page">
      <header className="desempenho-header">
        <h1>Meu Desempenho</h1>
        <p>Acompanhe sua evolução nos estudos e identifique onde melhorar.</p>
      </header>

      {/* RESUMO */}
      <section className="resumo-section">
        <div className="resumo-card">
          <h2>{resumo.acertos}%</h2>
          <p>Taxa de acertos</p>
        </div>

        <div className="resumo-card">
          <h2>{resumo.horasHoje}h</h2>
          <p>Horas estudadas hoje</p>
        </div>

        <div className="resumo-card">
          <h2>{resumo.mediaSemanal}h</h2>
          <p>Média semanal</p>
        </div>
      </section>

      {/* GRÁFICO DE DESEMPENHO POR ÁREA */}
      <section className="grafico-section">
        <h2 className="section-title">Desempenho por Área</h2>

        <div className="grafico-container">
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={desempenhoAreas}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="area" stroke="#e2e8f0" />
              <PolarRadiusAxis stroke="#475569" angle={30} domain={[0, 100]} />
              <Radar
                name="Nota"
                dataKey="nota"
                stroke="#22c55e"
                fill="#22c55e"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* GRAFICO DE HORAS POR DIA */}
      <section className="grafico-section">
        <h2 className="section-title">Horas Estudadas na Semana</h2>

        <div className="grafico-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={horasSemana}>
              <CartesianGrid strokeDasharray="3 3" stroke="#413d3dff" />
              <XAxis dataKey="dia" stroke="#627961ff" />
              <YAxis stroke="#627961ff" />
              <Tooltip />
              <Bar dataKey="horas" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
