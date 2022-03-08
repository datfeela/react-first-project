import styles from "./Messages.module.scss";
import Message from "./Message/Message";

const Messages = (props) => {
    return (
        <div className={styles.wrap}>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
};

export default Messages;
