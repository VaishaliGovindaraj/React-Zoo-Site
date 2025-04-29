import styles from './animalpopup.module.css'

const AnimalDetailPopup = ({displayContent,closePopup}) => {
    return (
        <div className={styles.popup_container}>
            <div className={`${styles.custom_btn} ${styles.button}`} onClick={closePopup}> Close </div>
            <p>Name:{displayContent.name}</p>
            <p>LifeSpan:{displayContent.lifeSpan}</p>
            <div>Food:{displayContent.food.map((food, index) => <p key={index}>{food}</p>)}</div>
            <div>Length: {displayContent.length}</div>
            <div>Weight: {displayContent.weight}</div>
            <div>Place: {displayContent.place}</div>
            <div>GroupName: {displayContent.group}</div>
            
        </div>
    )
}

export default AnimalDetailPopup;

