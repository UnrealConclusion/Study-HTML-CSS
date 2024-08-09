import PropTypes from 'prop-types';
import styles from './Info.module.css';

export default function Info({date, title}) {
    return (
        <p className={styles.info}>{date} | <span className={styles.title}>{title}</span></p>
    );
}
Info.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string
}