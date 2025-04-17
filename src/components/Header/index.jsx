import Navigation from "../../components/Navigation";
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.home_wrapper_div}>
      <h1 className={styles.title}>Welcome to the Zoo 🐾</h1>
      <Navigation />
    </div>
  );
};

export default Header;
