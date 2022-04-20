import { createSelector } from "reselect"

export const selectProfile = (state) => {
    return state.profilePage
}

export const selectImgPlaceholderSmall = () => {
    return 'https://via.placeholder.com/250x250';
}

export const selectProfileInfo = (state) => {
    return state.profilePage.profileInfo
}

export const selectCurrentUserId = (state) => {
    if (state.profilePage.profileInfo) return state.profilePage.profileInfo.userId
    return null
}

export const selectStatus = (state) => {
    return state.profilePage.profileStatus
}

export const selectPosts = (state) => {
    return state.profilePage.posts
}

export const selectCurrentUserPosts = createSelector(selectPosts, selectCurrentUserId, (posts, targetUserId) => {
    return posts[targetUserId]
})