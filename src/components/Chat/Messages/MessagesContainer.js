import Messages from "./Messages";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.chatPage.messages
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
    };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;