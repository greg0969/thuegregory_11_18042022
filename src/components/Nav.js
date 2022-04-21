import { NavLink } from "react-router-dom"
import "../styles/index.scss";

function Nav() {
    return (
        <nav>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className="link">Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className="link">A Propos</li>
                </NavLink>
            </ul>
        </nav>   
    )
}

export default Nav