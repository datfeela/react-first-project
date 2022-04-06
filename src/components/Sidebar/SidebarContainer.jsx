import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import {initializeProfile} from '../../redux/profilePageReducer'

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        authUserId: state.auth.id,
        profileInfo: state.profilePage.profileInfo
    };
};

let dispatchObj = {
    initializeProfile
};


export default connect(mapStateToProps, dispatchObj)(Sidebar);
