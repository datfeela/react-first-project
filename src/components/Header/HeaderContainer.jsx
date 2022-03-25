import React from "react";
import Header from "./Header";
import { getUserData } from "../../redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    getUserData = () => {
        this.props.getUserData();
    };

    componentDidMount = () => {
        if (!this.props.isAuth) {
            this.getUserData();
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
    getUserData
};

export default connect(mapStateToProps, dispatchObj)(HeaderContainer);
