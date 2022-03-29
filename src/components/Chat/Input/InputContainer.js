
import { connect } from "react-redux";
import { chatInputChange, sendMessage } from "../../../redux/chatPageReducer";
import Input from "./Input";

let mapStateToProps = (state) => {
    return {
        inputText: state.chatPage.inputText
    };
};

let dispatchObj = {
    sendMessage,
    chatInputChange
}

const InputContainer = connect(mapStateToProps, dispatchObj)(Input);

export default InputContainer;
