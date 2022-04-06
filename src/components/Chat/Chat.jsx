import styles from "./Chat.module.scss";

import Header from "./Header/Header";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";
import Sidebar from "./Sidebar/Sidebar"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const Chat = (props) => {
    const sendMessage = (formData) => {
        console.log(formData);
        props.sendMessage(formData.newMessageText);
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.contentWrap + " wrapNoPadding"}>
                <Header />
                <Messages messages={props.messages} />
                <Input onSubmit={sendMessage}/> 
            </div>
            {/* <Sidebar /> */}
        </div>
    );
}


let AuthRedirectComponent = withAuthRedirect(Chat)
export default AuthRedirectComponent;
