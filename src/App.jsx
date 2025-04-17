import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Animal from "./pages/Animals";
import AnimalDetails from "./pages/AnimalDetails";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path=":animalType" element={<Animal />} />
      <Route path=":animalType/:animalName" element={<AnimalDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
