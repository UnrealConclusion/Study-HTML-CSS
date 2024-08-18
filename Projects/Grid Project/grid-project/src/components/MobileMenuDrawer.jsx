import dribbleIcon from '../assets/images/dribble_icon.png'
import instaIcon from '../assets/images/insta_icon.png'
import vIcon from '../assets/images/v_icon.png'
import styles from './MobileMenuDrawer.module.css'
import PropTypes from 'prop-types';

/**
 * Drawer to be expended when hamburger on Navbar is clicked 
 */
export default function MobileMenuDrawer({isOpen}) {
    return (
        <nav className={isOpen ? `${styles.navDrawer} ${styles.openDrawer}` : styles.navDrawer}>
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
    );
}

MobileMenuDrawer.propTypes = {
    isOpen: PropTypes.bool
};