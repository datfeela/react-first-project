
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserData } from '../redux/authReducer';

export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {

        // useEffect(() => {
        //     debugger;
        //     if (!props.isAuth) props.getUserData()
        // })

        if (props.isAuth) return (
            <Component {...props} />
        )
        return (
            <Navigate replace to="/login" />
        )
    };

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        };
    };

    let containerAuthRedirect = connect(mapStateToProps, {getUserData})(RedirectComponent);
    return containerAuthRedirect;
}




