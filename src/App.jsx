import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Animal from "./pages/Animals";
import AnimalDetails from "./pages/AnimalDetails";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path=":animalType" element={<Animal />} />
      <Route path=":animalType/:animalName" element={<AnimalDetails />} />
    </Routes>
  );
}

export default App;
