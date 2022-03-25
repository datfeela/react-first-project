import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: true
            }
        default:
            return state;
    }

}

export default authReducer;

//AC

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    userData: userData
})

//TC

export const getUserData = () => (dispatch) => {
    authAPI.getUserData().then((response) => {
        if (response.resultCode === 0) {
            dispatch(setUserData({ ...response.data }))
        }
    });

}

