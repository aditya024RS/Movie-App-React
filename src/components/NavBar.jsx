import { Link } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../css/Navbar.css"

export function NavBar() {
  const { lightMode, togglelightMode } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favourites" className="nav-link">Favourites</Link>
        <button 
          onClick={togglelightMode}
          className="theme-toggle"
          aria-label={lightMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {lightMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;