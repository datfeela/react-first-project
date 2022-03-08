import styles from "./Friend.module.scss";

const Friend = (props) => {
    return (
        <div className={styles.wrap}>
            <img src="https://via.placeholder.com/160x160?text=Pic" alt="avatar" className={styles.avatar} />
            <div className={styles.info}>
                <span className={styles.name}>{props.name}</span>
            </div>
        </div>
    );
}

export default Friend;
