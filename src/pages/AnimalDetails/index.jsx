import { useParams } from "react-router-dom";
import { groupNames } from "../../data/animals";

const AnimalDetails = () => {
  const { animalType, animalName } = useParams();

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Details for {animalName.toUpperCase()}</h2>
      <p>This is a {animalName}, which is part of the {animalType} group.</p>
      {console.log(groupNames)}
    </div>
  );
};

export default AnimalDetails;
