import { connect } from "react-redux";
import { selectAuthUserId, selectIsAuth } from "../../redux/authSelectors";
import { selectCurrentUserPosts, selectIsInitialized, selectProfileInfo, selectStatus} from "../../redux/profilePageSelectors";
import { initializeProfile, changeProfileInfo, updateStatus, addPost } from "../../redux/profilePageReducer";
import Profile from "./Profile";

let mapStateToProps = (state) => {
    return {
        isInit: selectIsInitialized(state),
        profileInfo: selectProfileInfo(state),
        profileStatus: selectStatus(state),
        posts: selectCurrentUserPosts(state),
        authUserId: selectAuthUserId(state),
        isAuth: selectIsAuth(state),
    };
};

let dispatchObj = {
    initializeProfile,
    changeProfileInfo,
    updateStatus,
    addPost,
};

export default connect(mapStateToProps, dispatchObj)(Profile)
