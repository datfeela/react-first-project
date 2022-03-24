import React, { useEffect } from "react";
import Header from "./Header";
import { setUserData } from "../../redux/authReducer";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    setUserData = () => {
        authAPI.getUserData().then((response) => {
            if (response.resultCode === 0) {
                this.props.setUserData({ ...response.data });
            }
        });
    };

    componentDidMount = () => {
        if (!this.props.isAuth) {
            this.setUserData();
        }
    };

    render = () => {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />;
    };
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    };
};

let dispatchObj = {
    setUserData,
};

export default connect(mapStateToProps, dispatchObj)(HeaderContainer);
