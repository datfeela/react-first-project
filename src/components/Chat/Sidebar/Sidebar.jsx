import styles from "./Sidebar.module.scss";

const Sidebar = (props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.contentWrap + " wrap"}></div>
        </div>
    );
};

export default Sidebar;
