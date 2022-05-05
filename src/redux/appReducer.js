import { getUserData } from "./authReducer";

const INITIALIZE_SUCCESS = 'app/INITIALIZE_SUCCESS',
    SET_LANGUAGE = 'app/SET_LANGUAGE',
    SET_THEME = 'app/SET_THEME'

let initialState = {
    isInitialized: false,
    theme: "light",
    lang: "eng"
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }
        case SET_LANGUAGE:
            return {
                ...state,
                lang: action.language
            }
        case SET_THEME:
            return {
                ...state,
                theme: action.theme
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

export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    language
})

export const setTheme = (theme) => ({
    type: SET_THEME,
    theme
})

//TC

export const initialize = () => async (dispatch, getState) => {
    const localStorageLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : localStorage.setItem('lang', 'eng');
    const localStorageTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : localStorage.setItem('theme', 'light')

    localStorageLang !== getState().app.lang && dispatch(setLanguage(localStorageLang));
    localStorageTheme !== getState().app.theme && dispatch(setTheme(localStorageTheme));
    await dispatch(getUserData());
    dispatch(setInitializeSuccess())
}

