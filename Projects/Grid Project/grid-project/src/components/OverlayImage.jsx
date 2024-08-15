import PropTypes from 'prop-types';
import styles from './OverlayImage.module.css'

/**
 * An image with a text overlay
 */
export default function OverlayImage({imagePath, text, id="", overlayStyles={}}) {

    return (
        <div id={id} className={styles.container}>
            <img src={imagePath}/>
            <p className={styles.overlay} style={overlayStyles}>{text}</p>
        </div>
    );
}

OverlayImage.propTypes = {
    id: PropTypes.string,
    imagePath: PropTypes.string,
    text: PropTypes.string,
    overlayStyles: PropTypes.object
};