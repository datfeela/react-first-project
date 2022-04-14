import styles from "./Chat.module.scss";

import Header from "./Header/Header";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";
import Sidebar from "./Sidebar/Sidebar"

const Chat = (props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.contentWrap + " wrapNoPadding"}>
                <Header />
                <Messages messages={props.messages} />
                <Input sendMessage={props.sendMessage}/> 
            </div>
            {/* <Sidebar /> */}
        </div>
    );
}

export default Chat;
