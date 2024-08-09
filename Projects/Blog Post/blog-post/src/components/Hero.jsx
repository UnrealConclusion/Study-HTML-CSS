import styles from './Hero.module.css'

export default function Hero() {
    return (
        <header className={styles.hero}>
            <h1>A Blog Post</h1>
            <p>Typography is one of the most important elements of front end design and development! In this exercise, we&apos;ll
                play around with some of the common CSS properties to manage and style our fonts by making a nice blog
                post-like
                web page.
            </p>
            <hr/>
        </header>
    );
}