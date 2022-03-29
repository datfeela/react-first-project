import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    };
};

let dispatchObj = {    
}; 


export default compose(
    connect(mapStateToProps, dispatchObj),
    withAuthRedirect
)(Dialogs)