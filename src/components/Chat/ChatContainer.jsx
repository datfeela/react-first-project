import Chat from "./Chat";
import { connect } from "react-redux";
import { sendMessage } from "../../redux/chatPageReducer"

const mapStateToProps = (state) => {
    return {
        messages: state.chatPage.messages
    };
};

const dispatchObj = {
    sendMessage
}

const ChatContainer = connect(mapStateToProps, dispatchObj)(Chat);

export default ChatContainer;