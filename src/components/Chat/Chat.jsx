import styles from "./Chat.module.scss";

import Header from "./Header/Header";
import MessagesContainer from "./Messages/MessagesContainer";
import InputContainer from "./Input/InputContainer";
import Sidebar from "./Sidebar/Sidebar"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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


let AuthRedirectComponent = withAuthRedirect(Chat)
export default AuthRedirectComponent;
