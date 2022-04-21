import Chat from "./Chat";
import { connect } from "react-redux";
import { getDialog, sendMessage, initializeChat, cleanUp } from "../../redux/chatReducer"
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        isInit: state.chat.isInit,
        messages: state.chat.messages,
        userImage: state.chat.userPhoto,
        recipientImage: state.chat.recipientPhoto,
    };
};

const dispatchObj = {
    initializeChat,
    sendMessage,
    getDialog,
    cleanUp
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, dispatchObj),
)(Chat);