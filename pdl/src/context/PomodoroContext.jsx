import { createContext, useContext, useState, useEffect, useRef } from "react";

const PomodoroContext = createContext();
export const usePomodoro = () => useContext(PomodoroContext);

export function PomodoroProvider({ children }) {
  const [modo, setModo] = useState("25-5");
  const [estudo, setEstudo] = useState(25);
  const [descanso, setDescanso] = useState(5);
  const [tempo, setTempo] = useState(estudo * 60);
  const [rodando, setRodando] = useState(false);
  const [fase, setFase] = useState("estudo");

  const intervalRef = useRef(null);

  // Atualiza tempos quando o modo muda
  useEffect(() => {
    if (modo === "25-5") {
      setEstudo(25);
      setDescanso(5);
    } else if (modo === "50-10") {
      setEstudo(50);
      setDescanso(10);
    }
  }, [modo]);

  // Atualiza o cronômetro quando estudo muda
  useEffect(() => {
    setTempo(estudo * 60);
  }, [estudo]);

  // FUNÇÃO QUE SALVA HORAS NO LOCALSTORAGE
  function registrarHoras(minutosEstudo) {
    const dados = JSON.parse(localStorage.getItem("desempenhoUsuario")) || {
      acertosTotais: 0,
      errosTotais: 0,
      horas: {},
      areas: {
        linguagens: 0,
        humanas: 0,
        natureza: 0,
        matematica: 0,
        redacao: 0,
      },
    };

    // garante que as estruturas existam
    if (!dados.horas) dados.horas = {};
    if (!dados.areas) {
      dados.areas = {
        linguagens: 0,
        humanas: 0,
        natureza: 0,
        matematica: 0,
        redacao: 0,
      };
    }

    const hoje = new Date().toISOString().split("T")[0];

    dados.horas[hoje] = (dados.horas[hoje] || 0) + minutosEstudo / 60;

    localStorage.setItem("desempenhoUsuario", JSON.stringify(dados));
  }

  // LOOP DO POMODORO
  useEffect(() => {
    if (!rodando) return;

    intervalRef.current = setInterval(() => {
      setTempo((t) => {
        if (t <= 1) {
          const som = new Audio("/sounds/beep.mp3");
          som.play();

          // salva estudo ao terminar ciclo de estudo
          if (fase === "estudo") {
            registrarHoras(estudo);
          }

          const novaFase = fase === "estudo" ? "descanso" : "estudo";
          setFase(novaFase);

          return novaFase === "estudo" ? estudo * 60 : descanso * 60;
        }

        return t - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [rodando, fase, estudo, descanso]);

  function iniciar() {
    setRodando(true);
  }

  function pausar() {
    setRodando(false);
  }

  function resetar() {
    setRodando(false);
    setFase("estudo");
    setTempo(estudo * 60);
  }

  return (
    <PomodoroContext.Provider
      value={{
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
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}
