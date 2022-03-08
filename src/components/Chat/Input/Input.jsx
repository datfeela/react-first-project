import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
    const messageInput = React.createRef();

    const sendMessage = () => {
        let text = messageInput.current.value;

        console.log(text);
    };

    return (
        <div className={styles.wrap + " wrap"}>
            <textarea ref={messageInput} className={styles.input} placeholder="Type a message..."></textarea>
            <button className={styles.button} onClick={sendMessage}>
                Send
            </button>
        </div>
    );
};

export default Input;
