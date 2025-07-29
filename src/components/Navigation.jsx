import { Link, useLocation } from "react-router-dom"
import "../css/Navigation.css"

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-icon">🔒</span>
          <span className="brand-text">CyberSec Portal</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/image" className={location.pathname === "/image" ? "nav-link active" : "nav-link"}>
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
