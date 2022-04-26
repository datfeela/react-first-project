import Chat from "./Chat";
import { connect } from "react-redux";
import { getDialog, setIsNewMessage, sendMessage, initializeChat } from "../../redux/chatReducer"
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { selectChatIsInit, selectMessages, selectRecipientImg, selectUserImg } from "../../redux/chatSelectors";

const mapStateToProps = (state) => {
    return {
        isInit: selectChatIsInit(state),
        messages: selectMessages(state),
        userImage: selectUserImg(state),
        recipientImage: selectRecipientImg(state),
    };
};

const dispatchObj = {
    initializeChat,
    setIsNewMessage,
    sendMessage,
    getDialog,
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, dispatchObj),
)(Chat);