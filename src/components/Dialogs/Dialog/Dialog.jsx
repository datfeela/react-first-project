import { NavLink } from "react-router-dom";
import styles from "./Dialog.module.scss";


const Dialog = (props) => {
    return (
        <NavLink to='/dialog' className={styles.wrap}>
            <img src="https://via.placeholder.com/120x120?text=Pic" alt="" className={styles.avatar} />
            <div className={styles.content}>
                <span className={styles.name}>{props.name}</span>
                <span className={styles.who}>Вы: </span>
                <span className={styles.message}>{props.message}</span>
            </div>
        </NavLink>
    );
}

export default Dialog;
