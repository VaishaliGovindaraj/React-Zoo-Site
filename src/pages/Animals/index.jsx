import { useParams, Outlet, Link } from "react-router-dom";

const Animal = () => {
  const { animalType } = useParams();

  const animalsByType = {
    mammals: ["lion", "tiger", "elephant"],
    reptiles: ["snake", "lizard"],
    birds: ["eagle", "parrot"]
  };

  const animals = animalsByType[animalType.toLowerCase()] || [];
  console.log(animals);
  return (
    <div>
      <h1>{animalType.toUpperCase()}</h1>
      <ul>
        {animals.map(animal => (
          <li key={animal}>
             <Link to={`/${animalType}/${animal}`}>{animal}</Link>
             <div>chnage this</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Animal;
