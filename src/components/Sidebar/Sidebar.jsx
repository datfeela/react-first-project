import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const linkClassName = ({ isActive }) => (isActive ? styles.link_active : styles.link_inactive);

const Sidebar = (props) => {
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
                    <NavLink to="/feed" className={linkClassName}>
                        Feed
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/friends" className={linkClassName}>
                        Friends
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/audio" className={linkClassName}>
                        Music
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings" className={linkClassName}>
                        Settings
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="users" className={linkClassName}>
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

// document.addEventListener("DOMContentLoaded", () => {
//     Array.from(document.querySelector("ul").children).forEach((el) => {
//         console.log(el);
//     });
// });

// Array.from(document.querySelector("ul")).forEach((el) => console.log(el));

export default Sidebar;
