import styles from "./Chat.module.scss";

import Header from "./Header/Header";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";
import Sidebar from "./Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Chat = ({ isInit, messages, sendMessage, initializeChat, ...props }) => {
    const dialogId = useParams().userId;
    const [inputHeight, setInputHeight] = useState('67px');

    useEffect(() => {
        initializeChat(dialogId);
    }, []);

    const onInputHeightChange = (height) => {
        setInputHeight(height);
    }

    if (!isInit) return <div>fix me pls</div>

    if (isInit) return (
        <div className={styles.wrap}>
            <div className={styles.contentWrap + " wrapNoPadding"}>
                <Header />
                <Messages
                    messages={messages}
                    userImage={props.userImage}
                    recipientImage={props.recipientImage}
                    inputHeight={inputHeight}
                    dialogId={dialogId}
                    getDialog={props.getDialog}
                    // cleanUp={props.cleanUp}
                />
                <Input sendMessage={sendMessage} dialogId={dialogId} onInputHeightChange={onInputHeightChange} />
            </div>
            {/* <Sidebar /> */}
        </div>
    );
};

export default Chat;
