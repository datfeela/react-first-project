import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = (props) => {
    return (
        <div className={styles.wrap}>
            <header className={styles.content}>
                <span className={styles.logo}>LOGO</span>
                <div className={styles.deleteThis}>
                    {props.isAuth ? (
                        <div>
                            {props.login} --- <button onClick={props.logOut}>Log out</button>
                        </div>
                    ) : (
                        <NavLink to={"/login"}>Log in</NavLink>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;
