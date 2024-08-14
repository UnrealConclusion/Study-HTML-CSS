import PropTypes from 'prop-types';
import styles from './BlogPost.module.css'

export default function BlogPost({children}) {
    return (
        <main className={styles.contentBox}>
            {children}
        </main>
    );
}

BlogPost.propTypes = {
    children : PropTypes.node
}

