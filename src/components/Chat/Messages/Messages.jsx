import styles from "./Messages.module.scss";
import Message from "./Message/Message";
import { useEffect, useRef } from "react";

const Messages = ({ inputHeight, ...props }) => {
    let messages = props.messages.map((el) => <Message key={el.id} {...el} userImage={props.userImage} recipientImage={props.recipientImage} />);

    const wrapRef = useRef();

    //устанавливаю скролл вниз при вмонтировании компонента и изменении сообщений в пропсах
    useEffect(() => {
        let scrollHeight = wrapRef.current.scrollHeight;
        let blockHeight = window.getComputedStyle(wrapRef.current).height;
        blockHeight = blockHeight.slice(0, blockHeight.indexOf("p"));
        wrapRef.current.scrollTop = scrollHeight - blockHeight;
    }, [props.messages]);

    return (
        <div ref={wrapRef} className={styles.wrap} style={{marginBottom: inputHeight}}>
            {messages}
        </div>
    );
};

export default Messages;
