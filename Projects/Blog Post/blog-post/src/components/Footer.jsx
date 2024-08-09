import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footerBar}>
            <ul>
                <li>
                    <a href="#privacy">Privacy Policy</a>
                </li>
                <li>
                    <a href="#terms">Terms & Conditions</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact Us</a>
                </li>
                <li>
                    <a href="#info">More Info</a>
                </li>
            </ul>
        </footer>
    );
}