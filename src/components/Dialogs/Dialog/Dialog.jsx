import { NavLink } from "react-router-dom";
import styles from "./Dialog.module.scss";


const Dialog = ({ id, ...props }) => {
    return (
        <NavLink to={`/dialog/${id}`} className={styles.wrap}>
            <img src={props.photos.small ? props.photos.small : "https://via.placeholder.com/120x120?text=Pic"} alt="" className={styles.avatar} />
            <div className={styles.content}>
                <span className={styles.name}>{props.userName}</span>
                <span className={styles.who}>Вы: </span>
                <span className={styles.message}>{props.message}</span>
            </div>
        </NavLink>
    );
}

export default Dialog;
