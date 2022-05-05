import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { selectIsAuth } from "../../redux/authSelectors";

const HeaderContainer = (props) => {
    return <Header {...props} />;
};

let mapStateToProps = (state) => {
    return {
        isAuth: selectIsAuth(state),
    };
};

let dispatchObj = {
};

export default connect(mapStateToProps, dispatchObj)(HeaderContainer);
