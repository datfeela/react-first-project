import { usersAPI } from "../api/api";

const SET_IS_INIT = 'users/SET_IS_INIT',
    FOLLOW = 'users/FOLLOW',
    UNFOLLOW = 'users/UNFOLLOW',
    SET_USERS = 'users/SET_USERS',
    SET_SEARCH_TERM = 'users/SET_SEARCH_TERM',
    RESET_USERS = 'users/RESET_USERS',
    UPDATE_USERS_LOAD_PAGE = 'users/UPDATE_USERS_LOAD_PAGE',
    UPDATE_IS_FETCHING = 'users/UPDATE_IS_FETCHING',
    TOGGLE_SUBSCRIBE_BUTTON = 'users/TOGGLE_SUBSCRIBE_BUTTON',
    SET_IS_ALL_USERS_LOADED = 'users/SET_IS_ALL_USERS_LOADED'

let initialState = {
    users: [],
    usersPerLoad: 10,
    currentPage: 1,
    searchTerm: null,
    isFetching: false,
    isInit: false,
    allUsersLoaded: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_INIT:
            return {
                ...state,
                isInit: action.isInit
            }
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
            let users = action.users.map(user => ({ ...user, subscribeBtnIsActive: true }));
            return { ...state, users: [...state.users, ...users] }
        case RESET_USERS:
            return { ...state, users: [] }
        case SET_SEARCH_TERM:
            return { ...state, searchTerm: action.searchTerm }
        case SET_IS_ALL_USERS_LOADED:
            return { ...state, allUsersLoaded: action.allUsersLoaded }
        case UPDATE_USERS_LOAD_PAGE:
            return { ...state, currentPage: action.currentPage }
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

export const setIsInit = (isInit) => ({
    type: SET_IS_INIT,
    isInit
})

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

export const resetUsers = () => ({
    type: RESET_USERS,
})

export const setSearchTerm = (searchTerm) => ({
    type: SET_SEARCH_TERM,
    searchTerm
})

export const setAllUsersLoaded = (allUsersLoaded) => ({
    type: SET_IS_ALL_USERS_LOADED,
    allUsersLoaded
})

export const updateUsersLoadPage = (currentPage) => ({
    type: UPDATE_USERS_LOAD_PAGE,
    currentPage
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

export const initializeUsers = (isSubscribedOn) => async (dispatch, getState) => {
    console.log(getState().usersPage)
    dispatch(setSearchTerm(""));
    dispatch(updateUsersLoadPage(1))
    getState().usersPage.users.length && dispatch(resetUsers); //???
    // dispatch(setAllUsersLoaded(false));
    dispatch(getUsers(getState().usersPage.usersPerLoad, 1, isSubscribedOn, ""))
}

export const cleanUp = () => (dispatch) => {
    dispatch(setIsInit(false));
    dispatch(resetUsers());
    dispatch(setAllUsersLoaded(false))
    dispatch(updateUsersLoadPage(1))
}

export const getUsers = (usersPerLoad, currentPage, isSubscribedOn, searchTerm) => (dispatch, getState) => {
    // debugger;
    if (!getState().usersPage.isFetching) {
        dispatch(updateIsFetching(true))
        usersAPI.getUsers(usersPerLoad, currentPage, isSubscribedOn, searchTerm).then((response) => {
            if (response.items.length > 0) {
                dispatch(setUsers(response.items))
                dispatch(updateUsersLoadPage(getState().usersPage.currentPage + 1))
            }
            if (response.items.length < usersPerLoad) {
                dispatch(setAllUsersLoaded(true))
            }
            dispatch(updateIsFetching(false))
            !getState().usersPage.isInit && dispatch(setIsInit(true))
        });
    }
}

export const subscribe = (userId) => async (dispatch) => {
    dispatch(toggleSubscribeButton(userId))
    let response = await usersAPI.getIsFollowed(userId);
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
}
