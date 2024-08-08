import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/"><h1>Joseph Shmoe | Ceramics</h1></NavLink>
            <ul>
                <li><NavLink to="/work" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Work</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? styles.activeLink : "")}>About</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Contact</NavLink></li>
            </ul>
        </nav>
    );
}