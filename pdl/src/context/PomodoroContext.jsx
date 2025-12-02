import { createContext, useContext, useState, useEffect, useRef } from "react";

const PomodoroContext = createContext();
export const usePomodoro = () => useContext(PomodoroContext);

export function PomodoroProvider({ children }) {
  const [estudo, setEstudo] = useState(25);
  const [descanso, setDescanso] = useState(5);
  const [modo, setModo] = useState("25-5");
  const [fase, setFase] = useState("estudo");
  const [tempo, setTempo] = useState(estudo * 60);
  const [rodando, setRodando] = useState(false);

  const intervaloRef = useRef(null);

  // Som quando termina
  const beep = new Audio("/sounds/beep.mp3");

  // Atualiza tempos quando modo muda
  useEffect(() => {
    if (modo === "25-5") {
      setEstudo(25);
      setDescanso(5);
      setTempo(25 * 60);
    } else if (modo === "50-10") {
      setEstudo(50);
      setDescanso(10);
      setTempo(50 * 60);
    }
  }, [modo]);

  // Timer rodando globalmente
  useEffect(() => {
    if (!rodando) return;

    intervaloRef.current = setInterval(() => {
      setTempo((t) => {
        if (t === 0) {
          beep.play();

          if (fase === "estudo") {
            setFase("descanso");
            return descanso * 60;
          } else {
            setFase("estudo");
            return estudo * 60;
          }
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(intervaloRef.current);
  }, [rodando, fase, estudo, descanso]);

  const iniciar = () => setRodando(true);
  const pausar = () => setRodando(false);
  const resetar = () => {
    setRodando(false);
    setFase("estudo");
    setTempo(estudo * 60);
  };

  return (
    <PomodoroContext.Provider
      value={{
        estudo,
        descanso,
        modo,
        setModo,
        setEstudo,
        setDescanso,
        fase,
        tempo,
        rodando,
        iniciar,
        pausar,
        resetar,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}
