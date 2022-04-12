import { NavLink } from "react-router-dom";
import styles from "./Post.module.scss";

const Post = (props) => {
    return (
        <div className={styles.wrap + " wrap"}>
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
                <span className={styles.content_text}>{props.text}</span>
            </div>
            <div className={styles.footer}>(здесь лукасовые)</div>
        </div>
    );
}

export default Post;
