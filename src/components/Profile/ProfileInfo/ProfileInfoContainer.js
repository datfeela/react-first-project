import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        userInfo: state.profilePage.users[0]
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
    };
};

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;