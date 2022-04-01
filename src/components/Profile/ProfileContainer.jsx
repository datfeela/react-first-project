import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getProfileInfo, getStatus, updateStatus, addPost } from "../../redux/profilePageReducer";
import Profile from "./Profile";

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage
    };
};

let dispatchObj = {
    getProfileInfo,
    getStatus,
    updateStatus,
    addPost,
};

export default compose(
    connect(mapStateToProps, dispatchObj),
    // withAuthRedirect
) (Profile)
