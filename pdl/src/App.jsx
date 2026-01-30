import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Materias from "./pages/Materias";
import Simulados from "./pages/Simulaos";
import Navbar from "../src/components/Navbar";
import Redacoes from "./pages/Redacoes";
import Mat from "./pages/Matemetica/Mat";
import Portugues from "./pages/Portugues";
import Historia from "./pages/Historia";
import Geografia from "./pages/Geografia";
import Fisica from "./pages/Fisica/Fisica";
import Quimica from "./pages/Quimica";
import Biologia from "./pages/Biologia";
import FiloSoci from "./pages/FiloSoci";
import Desempenho from "./pages/Desempenho";
import Pomodoro from "./pages/Pomodoro";
import MiniPomodoro from "./components/MiniPomodoro";
import Questoes from "./pages/Questoes";
import Funcoes from "./pages/Matemetica/Funcoes";
import Geometria from "./pages/Matemetica/Gometria";
import Estatistica from "./pages/Matemetica/Estatistica";
import Cinematica from "./pages/Fisica/Cinematica";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />;
      <MiniPomodoro />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/simulados" element={<Simulados />} />
        <Route path="/redacoes" element={<Redacoes />} />
        <Route path="/materias/matematica" element={<Mat />} />
        <Route path="/materias/portugues" element={<Portugues />} />
        <Route path="/materias/historia" element={<Historia />} />
        <Route path="/materias/geografia" element={<Geografia />} />
        <Route path="/materias/fisica" element={<Fisica />} />
        <Route path="/materias/quimica" element={<Quimica />} />
        <Route path="/materias/biologia" element={<Biologia />} />
        <Route path="/materias/filosoci" element={<FiloSoci />} />
        <Route path="/Desempenho" element={<Desempenho />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/questoes" element={<Questoes />} />
        <Route path="/funcoes" element={<Funcoes />} />
        <Route path="/geometria" element={<Geometria />} />
        <Route path="/estatistica" element={<Estatistica />} />
        <Route path="/cinematica" element={<Cinematica />} />
      </Routes>
    </BrowserRouter>
  );
}
