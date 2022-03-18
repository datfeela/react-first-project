import styles from "./Chat.module.scss";

import Header from "./Header/Header";
import MessagesContainer from "./Messages/MessagesContainer";
import InputContainer from "./Input/InputContainer";
import Sidebar from "./Sidebar/Sidebar"

const Chat = (props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.contentWrap + " wrapNoPadding"}>
                <Header />
                <MessagesContainer />
                <InputContainer />
            </div>
            {/* <Sidebar /> */}
        </div>
    );
}

export default Chat;
