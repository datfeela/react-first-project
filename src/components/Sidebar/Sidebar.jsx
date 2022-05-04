import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { SvgSelector } from "../_common/SvgSelector/SvgSelector";

const linkClassName = ({ isActive }) => (isActive ? styles.link_active : styles.link_inactive);

const Sidebar = (props) => {
    if (props.isAuth) {
        return (
            <nav className={styles.sidebar}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink to="/profile" className={linkClassName}>
                            <div className={styles.linkWrap}>
                                <SvgSelector className={styles.icon} id="user" />
                                <span>Profile</span>
                            </div>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/messages" className={linkClassName}>
                            <div className={styles.linkWrap}>
                                <SvgSelector className={styles.icon} id="messenger" />
                                <span>Messages</span>
                            </div>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/friends" className={linkClassName}>
                            <div className={styles.linkWrap}>
                                <SvgSelector className={styles.icon} id="users" />
                                <span>Friends</span>
                            </div>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/users" className={linkClassName}>
                            <div className={styles.linkWrap}>
                                <SvgSelector className={styles.icon} id="search" />
                                <span>Users</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
    return "";
};

export default Sidebar;
