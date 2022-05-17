import styles from "./ProfileActions.module.scss";
import { subscribe } from "../../../redux/profilePageReducer";
import { connect } from "react-redux";
import { useContext } from "react";
import { AppContext } from "../../../App";
import { SvgSelector } from "../../_common/SvgSelector/SvgSelector";
import { selectFollowIsFetching, selectIsFollowed } from "../../../redux/profilePageSelectors";
import { NavLink } from "react-router-dom";

const ProfileActions = ({ currentUserId, isFollowed, isFetching, ...props }) => {
    const appContext = useContext(AppContext);

    const subscribe = () => {
        props.subscribe(currentUserId);
    };

    return (
        <div className={styles.wrap + " " + (appContext.currentTheme === "dark" ? styles.wrap_dark : "")}>
            <NavLink to={`/dialog/${currentUserId}`}>
                <button className={styles.button}>
                    <SvgSelector id="messenger" className={styles.icon} />
                    {appContext.currentLanguage === "eng" && "Send a message"}
                    {appContext.currentLanguage === "ru" && "Написать сообщение"}
                </button>
            </NavLink>
            <button onClick={subscribe} disabled={isFetching} className={styles.button + " " + (isFetching && styles.button_disabled)}>
                <SvgSelector id={isFollowed ? "deleteFriend" : "addFriend"} className={styles.icon} />
                {!isFollowed && (appContext.currentLanguage === "eng" ? "Add friend" : appContext.currentLanguage === "ru" && "Добавить в друзья")}
                {isFollowed && (appContext.currentLanguage === "eng" ? "Delete friend" : appContext.currentLanguage === "ru" && "Удалить из друзей")}
            </button>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        isFollowed: selectIsFollowed(state),
        isFetching: selectFollowIsFetching(state),
    };
};

let dispatchObj = {
    subscribe,
};

export default connect(mapStateToProps, dispatchObj)(ProfileActions);
