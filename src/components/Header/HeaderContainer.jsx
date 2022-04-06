import React from "react";
import Header from "./Header";
import { getUserData, logOut } from "../../redux/authReducer";
import { connect } from "react-redux";

const HeaderContainer = (props) => {
    return <Header isAuth={props.isAuth} login={props.login} logOut={props.logOut} />;
};

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    };
};

let dispatchObj = {
    logOut
};

export default connect(mapStateToProps, dispatchObj)(HeaderContainer);
