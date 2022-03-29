import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const linkClassName = ({ isActive }) => (isActive ? styles.link_active : styles.link_inactive);

const Sidebar = (props) => {
    if (props.isAuth) {
        return (
            <nav className={styles.sidebar}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink to="/profile" className={linkClassName}>
                            Profile
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/messages" className={linkClassName}>
                            Messages
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/friends" className={linkClassName}>
                            Friends
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="users" className={linkClassName}>
                            Users
                        </NavLink>
                    </li>
                    {/* <li className={styles.item}>
                    <NavLink to="/audio" className={linkClassName}>
                        Music
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings" className={linkClassName}>
                        Settings
                    </NavLink>
                </li> */}
                    {/* <li className={styles.item}>
                    <NavLink to="/feed" className={linkClassName}>
                        Feed
                    </NavLink>
                </li> */}
                </ul>
            </nav>
        );
    }
    return ('')
};

export default Sidebar;
