import { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { dateToObj } from "../../../../utils/dateTransform";
import styles from "./Message.module.scss";

const Message = (props) => {
    const wrapClassName = `${styles.wrap} ${props.authUserId === props.senderId ? styles.wrap_sentByUser : styles.wrap_sentByRecipient} ${
        props.viewed ? "" : styles.wrap_notViewed
    }`;
    const imgUrl = props.authUserId === props.senderId ? props.userImage : props.recipientImage;

    const date = dateToObj(props.addedAt);
    const arrivalTime = setDate(date);

    return (
        <div id={props.id} className={wrapClassName}>
            <NavLink to={`/profile/${props.senderId}`} className={styles.avatarWrap}>
                <img className={styles.avatar} src={imgUrl} alt="avatar" />
            </NavLink>
            <div className={styles.content}>
                <NavLink to={`/profile/${props.senderId}`} className={styles.author}>
                    {props.senderName}
                </NavLink>
                {/* <span className={styles.author}>{props.senderName}</span> */}
                <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
                {/* {props.body} */}
                <div className={styles.meta}>
                    <span className={styles.arrivalTime}>{arrivalTime}</span>
                </div>
            </div>
        </div>
    );
};

const setDate = (date) => {
    const isArrivalThisYear = date.year == new Date().getFullYear();
    const isArrivalToday = isArrivalThisYear && date.monthNum == new Date().getMonth() + 1 && date.day == new Date().getDate();

    return isArrivalToday
        ? `${date.hour}:${date.minute}:${date.second}`
        : isArrivalThisYear
        ? `${date.month} ${date.day}, ${date.hour}:${date.minute}:${date.second}`
        : `${date.month} ${date.day}, ${date.year} ${date.hour}:${date.minute}:${date.second}`;
};

const mapStateToProps = (state) => {
    return {
        authUserId: state.auth.id,
    };
};

export default connect(mapStateToProps, {})(Message);
