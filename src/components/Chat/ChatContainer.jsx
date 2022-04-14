import Chat from "./Chat";
import { connect } from "react-redux";
import { sendMessage } from "../../redux/chatPageReducer"
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        messages: state.chatPage.messages
    };
};

const dispatchObj = {
    sendMessage
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, dispatchObj),
)(Chat);