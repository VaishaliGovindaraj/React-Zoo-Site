import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Zoo 🐾</h1>
      <ul>
        <li><Link to="/mammals">Mammals</Link></li>
        <li><Link to="/reptiles">Reptiles</Link></li>
        <li><Link to="/birds">Birds</Link></li>
      </ul>
    </div>
  );
};

export default Home;
