import { useParams } from "react-router-dom";
import { useState } from "react";
import { animalArray } from "../../data/animals";
import styles from './animaldetail.module.css';
import AnimalDescription from "../../components/AnimalDescription";

const AnimalDetails = () => {
  const {  animalName } = useParams();
  const [isexpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.animal_details_div}>
      {animalArray.filter(animal => animal.name.toLowerCase() === animalName.toLowerCase()).map((animal,index) => <AnimalDescription key={index} displayContent={animal} expanded={isexpanded} /> )}
    </div>
  );
};

export default AnimalDetails;
