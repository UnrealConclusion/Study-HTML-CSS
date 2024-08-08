import {photoLinks, photoNames} from "../assets/photos";
import styles from "./PhotoGrid.module.css";

export default function PhotoGrid() {
    return (
        <div className={styles.grid}>
            {photoLinks.map((link, i) => 
                <div key={i} className={styles.photo}>
                    <img src={link}/>
                    <h2>{photoNames[i]}</h2>
                </div>
            )}
        </div>
    );
}