export const selectIsAuth = (state) => {
    return state.auth.isAuth
}

export const selectAuthUserId = (state) => {
    return state.auth.id
}

export const selectGeneralError = (state) => {
    return state.auth.generalError
}