import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA',
    SHOW_ERROR = 'SHOW_ERROR'
// HANDLE_LOG_IN = 'HANDLE_LOG_IN'

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    generalError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: action.isAuth,
                generalError: null
            }
        case SHOW_ERROR:
            return {
                ...state,
                generalError: action.error
            }
        default:
            return state;
    }

}

const handleError = (response, dispatch) => {
    let error = response.messages[0];
    let action;

    switch (error) {
        case 'Enter valid Email':
            dispatch(setGeneralError(null))
            action = stopSubmit("login", { login: error })
            break
        default:
            action = setGeneralError(error)
            break
    }
    action && dispatch(action)
}

export default authReducer;

//AC

export const setUserData = (userData, isAuth) => ({
    type: SET_USER_DATA,
    userData,
    isAuth
})

export const setGeneralError = (error) => ({
    type: SHOW_ERROR,
    error
})

//TC

export const getUserData = () => (dispatch) => {
    return authAPI.getUserData().then((response) => {
        if (response.resultCode === 0) {
            dispatch(setUserData({ ...response.data }, true))
        }
    });
}

export const logIn = (authData) => (dispatch) => {
    authAPI.logIn(authData).then((response) => {
        response.resultCode === 0 ? dispatch(getUserData()) : handleError(response, dispatch);
    })
}

export const logOut = () => (dispatch) => {
    authAPI.logOut().then((response) => {
        response.resultCode === 0 ? dispatch(setUserData({
            email: null,
            id: null,
            login: null,
        }, false)) : console.log(response);
    })
}

