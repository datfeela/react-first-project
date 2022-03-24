import styles from "./User.module.scss";
import { NavLink, useNavigate } from "react-router-dom";

const User = (props) => {
    let subscribeText = props.user.followed ? "Unsubscribe" : "Subscribe";
    let imgSrc = props.user.photos.small != null ? props.user.photos.small : "https://via.placeholder.com/160x160?text=Pic";
    
    const subscribe = () => {
        props.subscribe(props.user.id);
    };

    return (
        <div className={styles.wrap}>
            <NavLink to={`/profile/${props.user.id}`}>
                <img src={imgSrc} alt="avatar" className={styles.avatar} />
            </NavLink>
            <div className={styles.info}>
                <NavLink to={`/profile/${props.user.id}`}>
                    <span className={styles.name}>{props.user.name}</span>
                </NavLink>
                {/* <span className={styles.location}>props.user.location</span> */}
                <span className={styles.status}>{props.user.status}</span>
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
