import { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../../App";
import { dateToObj } from "../../../../utils/dateTransform";
import styles from "./Message.module.scss";

const Message = (props) => {
    const appContext = useContext(AppContext);

    const wrapClassName = `${styles.wrap} ${props.authUserId === props.senderId ? styles.wrap_sentByUser : styles.wrap_sentByRecipient} ${
        props.viewed ? "" : styles.wrap_notViewed
    } ${appContext.currentTheme === "dark" ? styles.wrap_dark : ""}`;
    const imgUrl = props.authUserId === props.senderId ? props.userImage : props.recipientImage;

    const date = dateToObj(props.addedAt);
    const arrivalTime = setDate(date, appContext.currentLanguage);

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

const setDate = (date, lang) => {
    const isArrivalThisYear = date.year == new Date().getFullYear();
    const isArrivalToday = isArrivalThisYear && date.monthNum == new Date().getMonth() + 1 && date.day == new Date().getDate();

    if (lang === "eng")
        return isArrivalToday
            ? `${date.hour}:${date.minute}:${date.second}`
            : isArrivalThisYear
            ? `${date.month} ${date.day}, ${date.hour}:${date.minute}:${date.second}`
            : `${date.month} ${date.day}, ${date.year} ${date.hour}:${date.minute}:${date.second}`;
    if (lang === "ru")
        return isArrivalToday
            ? `${date.hour}:${date.minute}:${date.second}`
            : isArrivalThisYear
            ? `${date.day}.${date.monthNum}, ${date.hour}:${date.minute}:${date.second}`
            : `${date.day}.${date.monthNum}.${date.year}, ${date.hour}:${date.minute}:${date.second}`;
};

const mapStateToProps = (state) => {
    return {
        authUserId: state.auth.id,
    };
};

export default connect(mapStateToProps, {})(Message);
