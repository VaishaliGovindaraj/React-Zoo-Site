import styles from './animalpopup.module.css'
import { getImageUrl } from '../../utils/functions';

const AnimalDetailPopup = ({ displayContent, closePopup }) => {
    return (
        <div className={styles.popup_container}>
            <div className={styles.popup_header}>
                <div>{displayContent.name}</div>
                <div className={`${styles.custom_btn} ${styles.button}`} onClick={closePopup}> Close </div>
            </div>
            <div className={styles.popup_description}>
                <img className={styles.animal_image} src={getImageUrl(`${displayContent.name.replace(" ", "-")}.jpg`)} alt={displayContent.name} />
                <div>LifeSpan:{displayContent.lifeSpan}</div>
                <div className={styles.food}>Food:{displayContent.food.map((food, index) => <p key={index}>{food}</p>)}</div>
                <div>Length: {displayContent.length}</div>
                <div>Weight: {displayContent.weight}</div>
                <div>Place: {displayContent.place}</div>
                <div>GroupName: {displayContent.group}</div>
            </div>
           

        </div>
    )
}

export default AnimalDetailPopup;

