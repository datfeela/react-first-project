import styles from "./Message.module.scss";

const Message = (props) => {
    return (
        <div className={styles.wrap}>
            <span> {props.text}</span>
        </div>
    );
};

export default Message;
