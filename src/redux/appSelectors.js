export const selectAppIsInit = (state) => {
    return state.app.isInitialized
}

export const selectCurrentTheme = (state) => {
    return state.app.theme
}

export const selectCurrentLanguage = (state) => {
    return state.app.lang
}