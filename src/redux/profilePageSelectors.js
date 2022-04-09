export const selectProfile = (state) => {
    return state.profilePage
}

export const selectProfileInfo = (state) => {
    return state.profilePage.profileInfo
}

export const selectStatus = (state) => {
    return state.profilePage.profileStatus
}

export const selectPosts = (state) => {
    return state.profilePage.posts
}