import { useParams, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './animals.module.css';
import { animalArray } from "../../data/animals";
import AnimalDescription from "../../components/AnimalDescription";
import AnimalDetailPopup from "../AnimalDetailPopup";

const Animal = () => {
  const { animalType } = useParams();
  const [showDescription, setShowDescription] = useState();
  const [isexpanded, setIsExpanded] = useState(false);
  // const [load,setLoad] = useState(false);
  const [animalDetails, setAnimalDetails] = useState(false);

  const handleClick = (animal) => {
    if(showDescription === animal){
      setShowDescription(null)
    }else{
    setShowDescription(animal);
    setIsExpanded(false);}
    // setLoad(true);
  }

  const displayPopup = () => {
    setAnimalDetails(true);
  }

  const hidePopup = () => {
    setAnimalDetails(false);
  }


  useEffect(() => {
    setShowDescription(null);
    setIsExpanded(false);
    // setLoad(false);
  }, [animalType])

  // const animalsByType = {
  //   mammals: ["lion", "tiger", "elephant"],
  //   reptiles: ["snake", "lizard"],
  //   birds: ["eagle", "parrot"]
  // };

  // const animals = animalsByType[animalType.toLowerCase()] || [];

  return (
    <>
    <div className={styles.animal_div} >
      { !animalDetails && <>
      <div className={styles.container_div}>
        <div className={styles.sidebar_container}>
          {animalArray.filter(animal => animal.groupName.toLowerCase() === animalType).map((animal, index) => <div className={`${styles.sidebar} ${(showDescription && animal.name === showDescription.name) ? styles.active : styles.inactive}`} key={index}><div key={index} onClick={() => handleClick(animal)}>{animal.name} </div></div>)}
        </div>
        {/* <ul>{animals.map(animal => (<li key={animal}><Link to={`/${animalType}/${animal}`}>{animal}</Link></li>))}</ul> */}
        <div className={styles.main_content}>
           <h4>{animalType.toUpperCase()}</h4>
          {!showDescription && <div className={styles.default_content}>Welcome to {`${animalType}`} page</div>}
          {showDescription && <AnimalDescription displayContent={showDescription} expanded={isexpanded} popup={displayPopup}/>}
        </div>
      </div> </>}
            
            {animalDetails && <AnimalDetailPopup displayContent={showDescription} closePopup={hidePopup} />}
    </div>
      
      </>
  );
};

export default Animal;
