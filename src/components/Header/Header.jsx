import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.wrap}>
            <header className={styles.content}>
                <span className={styles.logo}>LOGO</span>
            </header>
        </div>
    );
}

export default Header;
