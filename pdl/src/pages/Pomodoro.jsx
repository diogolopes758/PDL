import { usePomodoro } from "../context/PomodoroContext";
import "./Pomodoro.css";

export default function Pomodoro() {
  const {
    modo,
    setModo,
    estudo,
    setEstudo,
    descanso,
    setDescanso,
    tempo,
    rodando,
    fase,
    iniciar,
    pausar,
    resetar,
  } = usePomodoro();

  const formatar = (s) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="pomodoro-container">
      <h1 className="titulo-pomo">Pomodoro</h1>

      {/* Modos */}
      <div className="modo-seletor">
        <button
          onClick={() => setModo("25-5")}
          className={modo === "25-5" ? "ativo" : ""}
        >
          25 / 5
        </button>

        <button
          onClick={() => setModo("50-10")}
          className={modo === "50-10" ? "ativo" : ""}
        >
          50 / 10
        </button>

        <button
          onClick={() => setModo("custom")}
          className={modo === "custom" ? "ativo" : ""}
        >
          Personalizado
        </button>
      </div>

      {modo === "custom" && (
        <div className="custom-config">
          <label>
            Estudo:
            <input
              type="number"
              value={estudo}
              onChange={(e) => setEstudo(+e.target.value)}
            />
          </label>

          <label>
            Descanso:
            <input
              type="number"
              value={descanso}
              onChange={(e) => setDescanso(+e.target.value)}
            />
          </label>
        </div>
      )}

      <div className="timer-box">
        <h2>{fase === "estudo" ? "Estudando" : "Descansando"}</h2>
        <div className="timer">{formatar(tempo)}</div>
      </div>

      <div className="controles">
        {!rodando && <button onClick={iniciar}>Iniciar</button>}
        {rodando && <button onClick={pausar}>Pausar</button>}
        <button onClick={resetar}>Resetar</button>
      </div>
    </div>
  );
}
