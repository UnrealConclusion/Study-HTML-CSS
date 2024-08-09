import PropTypes from 'prop-types';
import styles from './Headline.module.css'

export default function Headline({children}) {
    return (
        <div className={styles.headline}>
            {children}
        </div>
    );
}

Headline.propTypes = {
    children: PropTypes.node
}