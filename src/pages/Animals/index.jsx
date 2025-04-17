import { useParams, Outlet, Link } from "react-router-dom";
import { useState,useEffect } from "react";
import styles from './animals.module.css';
import { animalArray } from "../../data/animals";
import AnimalDescription from "../../components/AnimalDescription";

const Animal = () => {
  const { animalType } = useParams();
  const [showDescription,setShowDescription] = useState();
  const [isexpanded, setIsExpanded] = useState(false);
  // const [load,setLoad] = useState(false);

  const handleClick = (animal) => {
    setShowDescription(animal);
    setIsExpanded(false);
    // setLoad(true);
  } 

  useEffect( () => {
      setShowDescription(null);
      setIsExpanded(false);
      // setLoad(false);
  },[animalType])

  // const animalsByType = {
  //   mammals: ["lion", "tiger", "elephant"],
  //   reptiles: ["snake", "lizard"],
  //   birds: ["eagle", "parrot"]
  // };

  // const animals = animalsByType[animalType.toLowerCase()] || [];
  
  return (
    <div className={styles.animal_div} >
      <h4>{animalType.toUpperCase()}</h4>
      {animalArray.filter(animal => animal.groupName.toLowerCase() === animalType).map((animal, index)=> <div key={index} onClick={ () => handleClick(animal)}>{animal.name} </div>)}
      {/* <ul>{animals.map(animal => (<li key={animal}><Link to={`/${animalType}/${animal}`}>{animal}</Link></li>))}</ul> */}
      {showDescription && <AnimalDescription displayContent={showDescription} expanded={isexpanded} />}
    </div>
  );
};

export default Animal;
