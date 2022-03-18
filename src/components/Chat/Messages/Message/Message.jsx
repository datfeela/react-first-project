import styles from "./Message.module.scss";

const Message = (props) => {
    return <div className={styles.wrap}>{props.text}</div>;
};

export default Message;
