import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setProfileInfo, addPost, newPostInputChange } from "../../redux/profilePageReducer";
import Profile from "./Profile";


// const setProfileInfo = () => {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
//         props.setProfileInfo(response.data);
//     });
// };

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
    };
};

let dispatchObj = {
    setProfileInfo,
    addPost,
    newPostInputChange,
};

export default connect(mapStateToProps, dispatchObj)(Profile);
