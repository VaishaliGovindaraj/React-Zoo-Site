
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { getImageUrl } from "../../utils/functions";
import styles from './animaldescription.module.css'

const AnimalDescription = ({ displayContent, expanded, popup }) => {

  const location = useLocation();

  const isDetailPage = location.pathname === `/${encodeURIComponent(displayContent.groupName.toLowerCase())}/${encodeURIComponent(displayContent.name.toLowerCase())}`;

  // const [animalDetails, setAnimalDetails] = useState(false);
  // const handleClick = () => {
  //   popup;
  //   setAnimalDetails(true);
  // }

  return (
    <>
      {<div className={styles.animal_description_container}>
        <img className={styles.animal_image} src={getImageUrl(`${displayContent.name.replace(" ", "-")}.jpg`)} alt={displayContent.name} />
        <div className={styles.animal_content}>
          <p className={styles.animal_name}><stong>Name:</stong>{displayContent.name}</p>
          <div className={styles.animal_food}>Food:{displayContent.food.map((food, index) => <p key={index}>{food}</p>)}</div>
          <div>
            {isDetailPage
              ? <p className={styles.description}>Description : {displayContent.description}</p>
              : <div className={styles.description}><p>Description: </p> {expanded ? displayContent.description : (<> {displayContent.description.slice(0, 200) + "...."}   </>)}</div>}
          </div>
          <button className={`${styles.custom_btn} ${styles.button}`} onClick={popup}>Read More</button>

          {displayContent.description.length > 200 && !isDetailPage && location.pathname === "/" && (
            <div className={`${styles.description} ${styles.link}` }> <NavLink to={`/${displayContent.groupName.toLowerCase()}`}> Visit <strong>{displayContent.groupName.toUpperCase()}</strong> Page</NavLink> </div>
          )}
        </div>
      </div>
      }

    </>

  )
}

export default AnimalDescription;