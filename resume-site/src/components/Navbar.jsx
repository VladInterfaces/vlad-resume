import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main">
        <Link to="/" className="brand">
          Vladimir <span>[Gomez]</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/skills" className="nav-link">Skills</NavLink>
          <NavLink to="/resume" className="nav-link">Resume</NavLink>
          <NavLink to="/contact" className="nav-cta">Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar