import { usePomodoro } from "../context/PomodoroContext";
import { useLocation, Link } from "react-router-dom";
import "./MiniPomodoro.css";

export default function MiniPomodoro() {
  const location = useLocation();

  const { tempo, fase, rodando } = usePomodoro();

  if (location.pathname === "/pomodoro" || rodando === false) return null;

  const formatar = (s) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <Link to="/pomodoro">
      <div className="mini-pomo">
        <span>{fase === "estudo" ? "" : "☕"}</span>
        <span className="mini-timer">{formatar(tempo)}</span>
        {rodando ? (
          <span className="dot on"></span>
        ) : (
          <span className="dot off"></span>
        )}
      </div>
    </Link>
  );
}
