import { connect } from "react-redux";
import { getProfileInfo, addPost, newPostInputChange } from "../../redux/profilePageReducer";
import Profile from "./Profile";

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
    };
};

let dispatchObj = {
    getProfileInfo,
    addPost,
    newPostInputChange,
};

export default connect(mapStateToProps, dispatchObj)(Profile);
