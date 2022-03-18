import styles from "./User.module.scss";
import { NavLink } from "react-router-dom";

const User = (props) => {
    let subscribeText = props.user.followed ? "Unsubscribe" : "Subscribe";

    const subscribe = () => {
        props.subscribe(props.user.followed, props.user.id);
    };

    return (
        <div className={styles.wrap}>
            <img src="https://via.placeholder.com/160x160?text=Pic" alt="avatar" className={styles.avatar} />
            <div className={styles.info}>
                <span className={styles.name}>{props.user.name}</span>
                <span className={styles.location}>props.user.location</span>
                <span className={styles.education}>props.user.education</span>
                <div className={styles.actions}>
                    <NavLink to="/dialog" className={styles.actions_item}>
                        Message
                    </NavLink>
                    <span className={styles.divider}></span>
                    <button onClick={subscribe} className={styles.actions_item}>
                        {subscribeText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default User;
