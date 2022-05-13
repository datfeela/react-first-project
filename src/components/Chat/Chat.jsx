import styles from "./Chat.module.scss";

import Header from "./Header/Header";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";
import Sidebar from "./Sidebar/Sidebar";
import Preloader from "../_common/Preloader/Preloader";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { checkScrollbar } from "../../utils/checkScrollbar";

const Chat = ({ isInit, initializeChat, cleanUpChat, setIsNewMessage, messages, sendMessage, ...props }) => {
    const appContext = useContext(AppContext);

    useEffect(() => {
        checkScrollbar() ? appContext.setIsScrollbarActive(true) : appContext.setIsScrollbarActive(false);
    });

    useEffect(() => {
        initializeChat(dialogId);
        document.title = `Dialogs | Feelanet`;
        return () => {
            cleanUpChat();
        };
    }, []);

    const dialogId = useParams().userId;
    const [inputHeight, setInputHeight] = useState("67px");
    //ссылка на обсервер из дочернего элемента, чтобы удалять старый обсервер при создании нового
    const [childObserverRef, setObserverRef] = useState({
        observer: null,
        target: null,
    });

    //размер инпута при каждом изменении, чтобы прокинуть в сообщения и отредактировать высоту
    const onInputHeightChange = (height) => {
        setInputHeight(height);
    };

    if (!isInit)
        return (
            <div className={styles.wrap + " wrapNoPadding"}>
                <Preloader />
            </div>
        );

    if (isInit)
        return (
            <div className={styles.wrap}>
                <div className={styles.contentWrap + " wrapNoPadding"}>
                    <Header recipientImage={props.recipientImage} recipientName={props.recipientName} dialogId={dialogId} />
                    <Messages
                        setIsNewMessage={setIsNewMessage}
                        messages={messages}
                        userImage={props.userImage}
                        recipientImage={props.recipientImage}
                        inputHeight={inputHeight}
                        dialogId={dialogId}
                        getDialog={props.getDialog}
                        observerRef={childObserverRef}
                        setObserverRef={setObserverRef}
                    />
                    <Input sendMessage={sendMessage} dialogId={dialogId} onInputHeightChange={onInputHeightChange} />
                </div>
                {/* <Sidebar /> */}
            </div>
        );
};

export default Chat;
