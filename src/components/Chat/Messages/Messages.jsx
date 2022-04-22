import styles from "./Messages.module.scss";
import Message from "./Message/Message";
import { useEffect, useRef } from "react";
import { infiniteScrollObserver } from "../../../utils/intersectionObserver";

const Messages = ({ currentPage, setIsNewMessage, inputHeight, dialogId, getDialog, observerRef, setObserverRef, ...props }) => {
    //скролл вниз при вмонтировании компонента и новом сообщении
    useEffect(() => {
        if (props.messages.isNewMessage === true) {
            scrollDown();
            setIsNewMessage(false);
        }
    }, [props.messages.isNewMessage]);

    useEffect(() => {
        scrollDown();
    }, []);

    //observer
    useEffect(() => {
        if (messages && messages[1]) {
            //если пришло новое сообщение, а не порция старых из-за скролла, нужно снять старый обсервер и после этого ставить новый
            if (props.messages.isNewMessage && observerRef.observer !== null) {
                observerRef.observer.unobserve(observerRef.target)
            }

            let target = document.querySelector(`[id="${messages[1].key}"]`);
            let observer = infiniteScrollObserver(observerOptions, callbackFunc);
            setObserverRef({ observer: observer, target: target });
            observer.observe(target);
        }
    }, [props.messages.data]);

    let observerOptions = {
        root: document.querySelector(styles.wrap),
    };

    let callbackFunc = () => {
        getDialog(dialogId);
    };

    //----//
    
    let wrapRef = useRef();
    let messages = props.messages.data.map((el) => <Message key={el.id} {...el} userImage={props.userImage} recipientImage={props.recipientImage} />);

    let scrollDown = () => {
        let scrollHeight = wrapRef.current.scrollHeight;
        let blockHeight = window.getComputedStyle(wrapRef.current).height;
        blockHeight = blockHeight.slice(0, blockHeight.indexOf("p"));
        wrapRef.current.scrollTop = scrollHeight - blockHeight;
    };

    return (
        <div ref={wrapRef} className={styles.wrap} style={{ marginBottom: inputHeight }}>
            {messages}
        </div>
    );
};

export default Messages;
