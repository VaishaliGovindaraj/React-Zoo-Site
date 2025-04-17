import { groupNames } from "../../data/animals"
import { NavLink } from "react-router-dom"
import styles from './navigation.module.css'

const Navigation = () => {

    return(
        <div className={styles.nav_menu}>
            <NavLink  to="/" className={styles.menuItem}> Home</NavLink>
            {groupNames.map(group => (<NavLink to={`/${group.toLowerCase()}`}  className={styles.menuItem}>{group}</NavLink>))}
        </div>
    )
}

export default Navigation;