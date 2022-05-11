import { useContext } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../../App";
import styles from "./Dialog.module.scss";

const Dialog = ({ id, userName, hasNewMessages, newMessagesCount, photos, ...props }) => {
    const appContext = useContext(AppContext);

    let wrapClassName = appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap;
    wrapClassName = hasNewMessages ? wrapClassName + " " + styles.wrap_newMessage : wrapClassName;

    return (
        <NavLink to={`/dialog/${id}`} className={wrapClassName}>
            <img src={photos.small ? photos.small : "https://via.placeholder.com/120x120?text=Pic"} alt="" className={styles.avatar} />
            <div className={styles.content}>
                <span className={styles.name}>{userName}</span>
                {hasNewMessages && <div className={styles.newMessageNotification}>{newMessagesCount}</div>}
            </div>
        </NavLink>
    );
};

let mapStateToProps = (state) => {
    return {};
};

let dispatchObj = {};

export default connect(mapStateToProps, dispatchObj)(Dialog);
