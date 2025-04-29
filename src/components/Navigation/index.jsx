import { groupNames } from "../../data/animals"
import { NavLink } from "react-router-dom"
import styles from './navigation.module.css'

const Navigation = () => {

    return(
        <div className={styles.nav_menu}>
            <NavLink  to="/" className={ ({isActive}) => isActive? `${styles.active} ${styles.menuItem}`:styles.menuItem}> Home</NavLink>
            {groupNames.map((group,index) => (<NavLink to={`/${group.toLowerCase()}`} key={index} className={ ({isActive}) => isActive? `${styles.active} ${styles.menuItem}`:styles.menuItem}>{group}</NavLink>))}
        </div>
    )
}

export default Navigation;