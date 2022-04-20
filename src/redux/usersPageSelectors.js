export const selectIsInit = (state) => {
    return state.usersPage.isInit
}

export const selectUsers = (state) => {
    return state.usersPage.users
}

export const selectUser = (state, userId) => {
    return state.usersPage.users.find(user => user.id == userId);
}

export const selectUsersPerLoad = (state) => {
    return state.usersPage.usersPerLoad
}

export const selectCurrentPageNumber = (state) => {
    return state.usersPage.currentPage
}

export const selectSearchTerm = (state) => {
    return state.usersPage.searchTerm
}

export const selectIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const selectIsAllUsersLoaded = (state) => {
    return state.usersPage.allUsersLoaded
}