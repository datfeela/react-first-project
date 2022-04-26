import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Dialog.module.scss";

const Dialog = ({ id, userName, hasNewMessages, newMessagesCount, photos, ...props }) => {
    let wrapClassName = hasNewMessages ? styles.wrap + " " + styles.wrap_newMessage : styles.wrap;

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
