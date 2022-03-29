import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    UPDATE_USERS_LOAD_PAGE = 'UPDATE_USERS_LOAD_PAGE',
    UPDATE_IS_FETCHING = 'UPDATE_IS_FETCHING',
    TOGGLE_SUBSCRIBE_BUTTON = 'TOGGLE_SUBSCRIBE_BUTTON'

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
            let users = action.users.map(user => ({ ...user, subscribeBtnIsActive: true }));
            return { ...state, users: [...state.users, ...users] }
        case UPDATE_USERS_LOAD_PAGE: //!somnitelny code
            return { ...state, currentPage: state.currentPage + 1 }
        case UPDATE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_SUBSCRIBE_BUTTON:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, subscribeBtnIsActive: !user.subscribeBtnIsActive }
                    }
                    else return user;
                })
            }
        default:
            return state;
    }
}

export default usersReducer;

//action creators

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

export const toggleSubscribeButton = (userId) => ({
    type: TOGGLE_SUBSCRIBE_BUTTON,
    userId
})

//thunk creators

export const getUsers = (usersPerLoad, currentPage) => (dispatch) => {
    dispatch(updateIsFetching(true))
    usersAPI.getUsers(usersPerLoad, currentPage).then((response) => {
        dispatch(setUsers(response.items))
        dispatch(updateIsFetching(false))
    });
    dispatch(updateUsersLoadPage())

}

export const subscribe = (userId) => (dispatch) => {
    dispatch(toggleSubscribeButton(userId))
    usersAPI.getIsFollowed(userId).then((response) => {
        if (response === true) {
            usersAPI.unfollow(userId).then((response) => {
                response.resultCode === 0 ? dispatch(unfollow(userId)) : console.log(response);
                dispatch(toggleSubscribeButton(userId));
            });
        } else {
            usersAPI.follow(userId).then((response) => {
                response.resultCode === 0 ? dispatch(follow(userId)) : console.log(response);
                dispatch(toggleSubscribeButton(userId));
            });
        }
    });

}
