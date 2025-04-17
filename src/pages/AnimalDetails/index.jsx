import { useParams } from "react-router-dom";
import { useState } from "react";
import { animalArray } from "../../data/animals";
import styles from './animaldetail.module.css';
import AnimalDescription from "../../components/AnimalDescription";

const AnimalDetails = () => {
  const { animalType, animalName } = useParams();
  const [isexpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.animal_details_div}>
      {/* <h2>Details for {animalName.toUpperCase()}</h2>
      <p>This is a {animalName}, which is part of the {animalType} group.</p> */}
      {animalArray.filter(animal => animal.name.toLowerCase() === animalName.toLowerCase()).map(animal => <AnimalDescription displayContent={animal} expanded={isexpanded} /> )}
    </div>
  );
};

export default AnimalDetails;
