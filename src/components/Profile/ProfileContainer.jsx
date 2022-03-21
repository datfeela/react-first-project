import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setProfileInfo, addPost, newPostInputChange } from "../../redux/profilePageReducer";
import Preloader from "../_common/Preloader/Preloader";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    setProfileInfo = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            this.props.setProfileInfo(response.data);
        });

        // this.props.updateUsersLoadPage();
    };

    componentDidMount = () => {
        if (!this.props.profile.profileInfo) {
            this.setProfileInfo();
        }
    };

    render = () => {
        console.log(this.props);
        // return <Profile profile={this.props.profile} addPost={this.props.addPost} newPostInputChange={this.props.newPostInputChange} />;
        
        return <Profile {...this.props} />;
    };
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage
    };
};

let dispatchObj = {
    setProfileInfo,
    addPost,
    newPostInputChange
};

export default connect(mapStateToProps, dispatchObj)(ProfileContainer);
