// components/Navbar.jsx
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex gap-4">
      <Link to="/" className="text-white hover:underline">Home</Link>
      <Link to="/sobre" className="text-white hover:underline">Sobre</Link>
      <Link to="/contato" className="text-white hover:underline">Contato</Link>
      <Link to="/produto" className="text-white hover:underline">Produto</Link>
      <Link to="/servico" className="text-white hover:underline">Serviços</Link>
      <Link to="/politica" className="text-white hover:underline">Politica</Link>
      
    </nav>
  )
}

export default Navbar