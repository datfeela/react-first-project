import styles from "./User.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../../App";

const User = ({ user, subscribe }) => {
    const appContext = useContext(AppContext);

    let subscribeText = user.followed
        ? appContext.currentLanguage === "eng"
            ? "Unsubscribe"
            : appContext.currentLanguage === "ru" && "Отписаться"
        : appContext.currentLanguage === "eng"
        ? "Subscribe"
        : appContext.currentLanguage === "ru" && "Подписаться";
    let imgSrc = user.photos.small != null ? user.photos.small : "https://via.placeholder.com/160x160?text=Pic";

    const subscribeButtonClickHandler = () => {
        if (user.subscribeBtnIsActive) {
            subscribe(user.id);
        }
    };

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap} id={user.id}>
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
                        {appContext.currentLanguage === "eng" && "Message"} {appContext.currentLanguage === "ru" && "Написать сообщение"}
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
