import styles from './NavBar.module.css'
import dribbleIcon from '../assets/images/dribble_icon.png'
import instaIcon from '../assets/images/insta_icon.png'
import vIcon from '../assets/images/v_icon.png'

export default function NavBar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.left}>Patrick Star</div>
            <nav className={styles.right}>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
                <a href="#dribble">
                    <img src={dribbleIcon} alt=""/>
                </a>
                <a href="#dribble">
                    <img src={instaIcon} alt=""/>
                </a>
                <a href="#dribble">
                    <img src={vIcon} alt=""/>
                </a>
            </nav>
            <div className={styles.hamburger}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </header>
    );
}