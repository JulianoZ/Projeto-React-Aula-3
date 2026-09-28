// components/SistemaRotas.jsx
import { Routes, Route } from "react-router-dom"
import MainContent from "./MainContent"
import Sobre from "../pages/Sobre"
import Contato from "../pages/Contato"
import  Produto from "../pages/Produto"
import Servicos from "../pages/Servicos"

function SistemaRotas() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/produto" element={<Produto />} />
      <Route path="/servico" element={<Servicos />} />
            
    </Routes>
    
  )
}

export default SistemaRotas