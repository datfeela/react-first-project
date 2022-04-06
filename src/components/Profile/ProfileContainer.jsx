import { connect } from "react-redux";
import { compose } from "redux";
import { initializeProfile, updateStatus, addPost } from "../../redux/profilePageReducer";
import Profile from "./Profile";

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth
    };
};

let dispatchObj = {
    initializeProfile,
    updateStatus,
    addPost,
};

export default connect(mapStateToProps, dispatchObj)(Profile)
