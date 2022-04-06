import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserData } from '../redux/authReducer';

export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
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

    let dispatchObj = {
        getUserData
    }

    let containerAuthRedirect = connect(mapStateToProps, dispatchObj)(RedirectComponent);
    return containerAuthRedirect;
}




