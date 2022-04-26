import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { initializeDialogs } from "../../redux/chatReducer";
import { selectDialogs, selectDialogsIsInit } from "../../redux/chatSelectors";

let mapStateToProps = (state) => {
    return {
        isInit: selectDialogsIsInit(state),
        dialogs: selectDialogs(state)
    };
};

let dispatchObj = {
    initializeDialogs
}; 

export default compose(
    connect(mapStateToProps, dispatchObj),
    withAuthRedirect
)(Dialogs)