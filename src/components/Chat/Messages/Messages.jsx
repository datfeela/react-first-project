import styles from "./Messages.module.scss";
import Message from "./Message/Message";
import { useEffect, useRef } from "react";
import { infiniteScrollObserver } from "../../../utils/intersectionObserver";

const Messages = ({ inputHeight, dialogId, getDialog, cleanUp, ...props }) => {
    let messages = props.messages.map((el) => <Message key={el.id} {...el} userImage={props.userImage} recipientImage={props.recipientImage} />);

    const wrapRef = useRef();

    let scrollDown = () => {
        let scrollHeight = wrapRef.current.scrollHeight;
        let blockHeight = window.getComputedStyle(wrapRef.current).height;
        blockHeight = blockHeight.slice(0, blockHeight.indexOf("p"));
        wrapRef.current.scrollTop = scrollHeight - blockHeight;
    }

    //устанавливаю скролл вниз при вмонтировании компонента
    useEffect(() => {
        scrollDown();
    }, []);

    //cleanup
    useEffect(() => {
        return () => {
            cleanUp()
        };
    }, []);


    //----------------------------------//

     let observerOptions = {
         root: document.querySelector(styles.wrap),
    };
    
    let callbackFunc = () => {
        getDialog(dialogId)
    }

     useEffect(() => {
         if (messages && messages[1]) {
             let target = document.querySelector(`[id="${messages[1].key}"]`);
             let observer = infiniteScrollObserver(observerOptions, callbackFunc);
             observer.observe(target);
         }
     }, [props.messages]);

    //----------------------------------//
    return (
        <div ref={wrapRef} className={styles.wrap} style={{ marginBottom: inputHeight }}>
            {messages}
        </div>
    );
};

export default Messages;
