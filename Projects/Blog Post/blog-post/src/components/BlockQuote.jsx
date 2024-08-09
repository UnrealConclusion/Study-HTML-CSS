import PropTypes from 'prop-types';
import styles from './BlockQuote.module.css'

export default function BlockQuote({quote, author}) {
    return (
        <blockquote className={styles.quote}>
            {quote}
            <cite>- {author}</cite>
        </blockquote>
    );
}

BlockQuote.propTypes = {
    quote: PropTypes.string,
    author: PropTypes.string
}