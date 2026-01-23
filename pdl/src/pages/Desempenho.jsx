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
import { useEffect, useState } from "react";

export default function Desempenho() {
  const [resumo, setResumo] = useState({
    acertos: 0,
    horasHoje: 0,
    mediaSemanal: 0,
  });

  const [desempenhoAreas, setDesempenhoAreas] = useState([]);
  const [horasSemana, setHorasSemana] = useState([]);

  useEffect(() => {
    let dados;

    try {
      const raw = localStorage.getItem("desempenhoUsuario");
      dados = raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error("Erro ao ler localStorage:", e);
      localStorage.removeItem("desempenhoUsuario");
      dados = {};
    }

    // estrutura garantida
    dados = {
      acertosTotais: Number(dados.acertosTotais) || 0,
      errosTotais: Number(dados.errosTotais) || 0,
      horas: dados.horas || {},
      areas: {
        linguagens: dados.areas?.linguagens || 0,
        humanas: dados.areas?.humanas || 0,
        natureza: dados.areas?.natureza || 0,
        matematica: dados.areas?.matematica || 0,
        redacao: dados.areas?.redacao || 0,
      },
    };

    // taxa de acertos
    const total = dados.acertosTotais + dados.errosTotais;
    const taxa =
      total > 0 ? Math.round((dados.acertosTotais / total) * 100) : 0;

    // horas hoje
    const hoje = new Date().toISOString().split("T")[0];
    const horasHoje = Number(dados.horas[hoje] || 0);

    // média semanal
    const valores = Object.values(dados.horas).map(Number);
    const media =
      valores.length > 0
        ? Number(
            (valores.reduce((a, b) => a + b, 0) / valores.length).toFixed(1),
          )
        : 0;

    // áreas
    const areas = [
      { area: "Linguagens", nota: dados.areas.linguagens },
      { area: "Humanas", nota: dados.areas.humanas },
      { area: "Natureza", nota: dados.areas.natureza },
      { area: "Matemática", nota: dados.areas.matematica },
      { area: "Redação", nota: dados.areas.redacao },
    ];

    // gráfico semanal
    const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const horasGrafico = diasSemana.map((dia, index) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - index));
      const key = d.toISOString().split("T")[0];
      return { dia, horas: Number(dados.horas[key] || 0) };
    });

    setResumo({
      acertos: taxa,
      horasHoje,
      mediaSemanal: media,
    });

    setDesempenhoAreas(areas);
    setHorasSemana(horasGrafico);
  }, []);

  return (
    <div className="desempenho-page">
      <header className="desempenho-header">
        <h1>Meu Desempenho</h1>
        <p>Acompanhe sua evolução nos estudos e identifique onde melhorar.</p>
      </header>

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

      <section className="grafico-section">
        <h2 className="section-title">Desempenho por Área</h2>
        <div className="grafico-container">
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={desempenhoAreas}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="area" stroke="#e2e8f0" />
              <PolarRadiusAxis stroke="#475569" domain={[0, 100]} />
              <Radar
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

      <section className="grafico-section">
        <h2 className="section-title">Horas Estudadas na Semana</h2>
        <div className="grafico-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={horasSemana}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="horas" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
