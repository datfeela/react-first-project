import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getDialogs } from "../../redux/chatReducer";

let mapStateToProps = (state) => {
    return {
        dialogs: state.chat.dialogs
    };
};

let dispatchObj = {
    getDialogs
}; 

export default compose(
    connect(mapStateToProps, dispatchObj),
    withAuthRedirect
)(Dialogs)