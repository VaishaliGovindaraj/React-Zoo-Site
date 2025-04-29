import Navigation from "../../components/Navigation";
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.home_wrapper}>
      <h1 className={styles.title}> 🐾 Wild Wonders 🐾</h1>
      <Navigation />
    </div>
  );
};

export default Header;
