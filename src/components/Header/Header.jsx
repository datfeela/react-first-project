import styles from "./Header.module.scss";

const Header = (props) => {
    return (
        <div className={styles.wrap}>
            <header className={styles.content}>
                <span className={styles.logo}>LOGO</span>
                <span className={styles.deleteThis}>{props.isAuth ? props.login : "log in"}</span>
            </header>
        </div>
    );
};

export default Header;
