import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../../App";
import styles from "./Post.module.scss";

const Post = (props) => {
    const appContext = useContext(AppContext);

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " wrap " + styles.wrap_dark : styles.wrap + " wrap"}>
            <div className={styles.header}>
                <img src="https://via.placeholder.com/120x120?text=Pic" alt="" className={styles.avatar} />
                <div className={styles.info}>
                    <NavLink to={`/profile/${props.authorId}`}>
                        <span className={styles.author}>{props.author}</span>
                    </NavLink>
                    <span className={styles.date}>{props.date}</span>
                </div>
            </div>
            <div className={styles.content}>
                <span className={styles.content__text}>{props.text}</span>
            </div>
            <div className={styles.footer}>(здесь лукасовые)</div>
        </div>
    );
};

export default Post;
