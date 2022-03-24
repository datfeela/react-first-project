const SUBSCRIBE = 'SUBSCRIBE',
    FOLLOW = 'FOLLOW',
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
            // debugger;
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

export const follow = (userId) => ({
    type: FOLLOW,
    userId
})

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const updateUsersLoadPage = () => ({
    type: UPDATE_USERS_LOAD_PAGE
})

export const updateIsFetching = (isFetching) => ({
    type: UPDATE_IS_FETCHING,
    isFetching
})
