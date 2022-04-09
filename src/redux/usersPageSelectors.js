export const selectUsers = (state) => {
    return state.usersPage.users
}

export const selectUsersPerLoad = (state) => {
    return state.usersPage.usersPerLoad
}

export const selectCurrentPageNumber = (state) => {
    return state.usersPage.currentPage
}

export const selectIsFetching = (state) => {
    return state.usersPage.isFetching
}