
import { connect } from "react-redux";
import { chatInputChangeActionCreator, sendMessageActionCreator } from "../../../redux/chatPageReducer";
import Input from "./Input";


// const InputContainer = (props) => {
//     const state = props.store.getState();

//     const sendMessage = () => {
//         props.store.dispatch(sendMessageActionCreator());
//     };

//     const inputChangeHandler = (text) => {
//         props.store.dispatch(chatInputChangeActionCreator(text));
//     };

//     return (
//         <Input sendMessage={sendMessage} inputChangeHandler={inputChangeHandler} inputText={state.chatPage.inputText}/>
//     );
// };

let mapStateToProps = (state) => {
    return {
        inputText: state.chatPage.inputText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        inputChangeHandler: (text) => {
            dispatch(chatInputChangeActionCreator(text));
        },
    };
};

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;
