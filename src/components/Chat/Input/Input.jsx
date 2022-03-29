import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
    const sendMessage = () => {
        props.sendMessage();
    };

    const inputChangeHandler = (e) => {
        let text = e.target.value;
        props.chatInputChange(text);
    };

    return (
        <div className={styles.wrap + " wrap"}>
            <textarea onChange={inputChangeHandler} className={styles.input} placeholder="Type a message..." value={props.inputText} />
            <button onClick={sendMessage} className={styles.button}>
                Send
            </button>
        </div>
    );
};

export default Input;
