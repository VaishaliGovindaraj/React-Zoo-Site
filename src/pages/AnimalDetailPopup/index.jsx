import styles from './animalpopup.module.css'

const AnimalDetailPopup = ({displayContent,closePopup}) => {
    return (
        <div className={styles.popup_container}>
            <div className={`${styles.custom_btn} ${styles.button}`} onClick={closePopup}> Close </div>
            <p>Name:{displayContent.name}</p>
            <p>LifeSpan:{displayContent.lifeSpan}</p>
            <div>Food:{displayContent.food.map((food, index) => <p key={index}>{food}</p>)}</div>
        </div>
    )
}

export default AnimalDetailPopup;