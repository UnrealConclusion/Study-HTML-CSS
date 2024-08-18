import styles from './NavBar.module.css'
import dribbleIcon from '../assets/images/dribble_icon.png'
import instaIcon from '../assets/images/insta_icon.png'
import vIcon from '../assets/images/v_icon.png'
import { useState } from 'react';
import PropTypes from 'prop-types';


export default function NavBar({toggleDrawer}) {
    const [animate, setAnimate] = useState(false);

    function handleHamburgerClick() {
        setAnimate((current) => !current); // play hamburger bars animation 
        toggleDrawer(); // toggle the drawer
    }

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
            <div className={styles.hamburger} onClick={handleHamburgerClick}>
                <div className={animate ? `${styles.bar} ${styles.animateBar1}` : styles.bar}></div>
                <div className={animate ? `${styles.bar} ${styles.animateBar2}` : styles.bar}></div>
                <div className={animate ? `${styles.bar} ${styles.animateBar3}` : styles.bar}></div>
            </div>
        </header>
    );
}

NavBar.propTypes = {
    toggleDrawer: PropTypes.func
};