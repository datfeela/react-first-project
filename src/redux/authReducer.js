import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA',
    HANDLE_LOG_IN = 'HANDLE_LOG_IN'

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
        // case HANDLE_LOG_IN:
        //     return {
        //         ...state,
        //         ...action
        //     }
        default:
            return state;
    }

}

export default authReducer;

//AC

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    userData
})

// export const handleLogin = (userId) => ({
//     type: HANDLE_LOG_IN,
//     userId
// })

//TC

export const getUserData = () => (dispatch) => {
    authAPI.getUserData().then((response) => {
        if (response.resultCode === 0) {
            dispatch(setUserData({ ...response.data }))
        }
    });
}

export const logIn = (authData) => (dispatch) => {
    authAPI.logIn(authData).then((response) => {
        response.resultCode === 0 ? dispatch(getUserData()) : console.log(response);
    })
}

