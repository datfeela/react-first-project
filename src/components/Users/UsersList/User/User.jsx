import styles from "./User.module.scss";
import { NavLink } from "react-router-dom";

const User = ({user, subscribe}) => {
    let subscribeText = user.followed ? "Unsubscribe" : "Subscribe";
    let imgSrc = user.photos.small != null ? user.photos.small : "https://via.placeholder.com/160x160?text=Pic";

    const subscribeButtonClickHandler = () => {
        if (user.subscribeBtnIsActive) {
            subscribe(user.id);
        }
    };

    return (
        <div className={styles.wrap} id={user.id}>
            <NavLink to={`/profile/${user.id}`}>
                <img src={imgSrc} alt="avatar" className={styles.avatar} />
            </NavLink>
            <div className={styles.info}>
                <NavLink to={`/profile/${user.id}`}>
                    <span className={styles.name}>{user.name}</span>
                </NavLink>
                {/* <span className={styles.location}>user.location</span> */}
                <span className={styles.status}>{user.status}</span>
                <div className={styles.actions}>
                    <NavLink to={`/dialog/${user.id}`} className={styles.actions_item}>
                        Message
                    </NavLink>
                    <span className={styles.divider}></span>
                    <button
                        onClick={subscribeButtonClickHandler}
                        className={user.subscribeBtnIsActive ? styles.actions_item : styles.actions_item + " " + styles.button_disabled}
                    >
                        {subscribeText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default User;
