import styles from "./Messages.module.scss";
import Message from "./Message/Message";

const Messages = (props) => {
    console.log(props);
    let messages = props.messages.map((el) => <Message text={el.text} />);

    return (
        <div className={styles.wrap}>
            {messages}
        </div>
    );
};

export default Messages;
