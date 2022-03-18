const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    UPDATE_USERS_LOAD_PAGE = 'UPDATE_USERS_LOAD_PAGE',
    UPDATE_IS_FETCHING = 'UPDATE_IS_FETCHING'

let initialState = {
    users: [],
    usersPerLoad: 10,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    else return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    else return user;
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        case UPDATE_USERS_LOAD_PAGE: //!somnitelny code
            return { ...state, currentPage: state.currentPage + 1 }
        case UPDATE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
}

export default usersReducer;

export const followAC = (userId) => ({
    type: FOLLOW,
    userId
})

export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
})

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
})

export const updateUsersLoadPageAC = () => ({
    type: UPDATE_USERS_LOAD_PAGE
})

export const updateIsFetchingAC = (isFetching) => ({
    type: UPDATE_IS_FETCHING,
        isFetching
})
