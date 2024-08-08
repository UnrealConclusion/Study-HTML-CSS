import styles from "./FooterContent.module.css";

export default function FooterContent() {
    return (
        <div className={styles.about}>
            <h3> 
                Designing, making, and selling goods of timeless design and uncompromising
                integrity—made thoughtfully, honestly, and with pride—to be enjoyed with similar intention.
            </h3>
            <h3 className={styles.cta}>Let&apos;s work together.</h3>
            <div className={styles.contact}>
                <p>joseph@jsceramics.com</p>
                <p>(212)772-5445</p>
            </div>
        </div>
    );
}