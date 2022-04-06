import { getUserData } from "./authReducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'

let initialState = {
    isInitialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state;
    }
}

export default appReducer;

//AC

export const setInitializeSuccess = () => ({
    type: INITIALIZE_SUCCESS
})

//TC

export const initialize = () => (dispatch) => {
    let promise = dispatch(getUserData());
    promise.then(() => {
        dispatch(setInitializeSuccess())
    })
}

