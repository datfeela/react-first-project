import { usersAPI } from "../api/api";
import { selectUser } from "./usersPageSelectors";

const SET_IS_INIT = 'users/SET_IS_INIT',
    SUBSCRIBE = 'users/SUBSCRIBE',
    SET_USERS = 'users/SET_USERS',
    SET_USERS_FOUND_COUNT = 'users/SET_USERS_FOUND_COUNT',
    SET_SEARCH_TERM = 'users/SET_SEARCH_TERM',
    RESET_USERS = 'users/RESET_USERS',
    UPDATE_USERS_LOAD_PAGE = 'users/UPDATE_USERS_LOAD_PAGE',
    UPDATE_IS_FETCHING = 'users/UPDATE_IS_FETCHING',
    TOGGLE_SUBSCRIBE_BUTTON = 'users/TOGGLE_SUBSCRIBE_BUTTON',
    SET_IS_ALL_USERS_LOADED = 'users/SET_IS_ALL_USERS_LOADED'

let initialState = {
    users: [],
    usersFoundCount: null,
    usersPerLoad: 10,
    currentPage: 1,
    searchTerm: "",
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
        case SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed }
                    }
                    return user;
                })
            }
        case SET_USERS:
            let users = action.users.map(user => ({ ...user, subscribeBtnIsActive: true }));
            return { ...state, users: [...state.users, ...users] }
        case RESET_USERS:
            return { ...state, users: [] }
        case SET_USERS_FOUND_COUNT:
            return { ...state, usersFoundCount: action.count }
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

const subscribeToggle = (userId) => ({
    type: SUBSCRIBE,
    userId
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const setUsersFoundCount = (count) => ({
    type: SET_USERS_FOUND_COUNT,
    count
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

export const initializeUsers = (isSubscribedOn) => (dispatch, getState) => {
    dispatch(getUsers(getState().usersPage.usersPerLoad, 1, isSubscribedOn, ""))
}

export const cleanUp = () => (dispatch) => {
    dispatch(setIsInit(false));
    dispatch(setSearchTerm(""));
    dispatch(resetUsers());
    dispatch(setAllUsersLoaded(false))
    dispatch(updateUsersLoadPage(1))
}

export const getUsers = (usersPerLoad, currentPage, isSubscribedOn, searchTerm) => async (dispatch, getState) => {
    if (!getState().usersPage.isFetching) {
        dispatch(updateIsFetching(true))

        let response = await usersAPI.getUsers(usersPerLoad, currentPage, isSubscribedOn, searchTerm)

        dispatch(setUsersFoundCount(response.totalCount))//!
        if (response.items.length > 0) {
            dispatch(setUsers(response.items))
            dispatch(updateUsersLoadPage(getState().usersPage.currentPage + 1))
        }
        //check if all users are loaded
        if (getState().usersPage.users.length === response.totalCount) dispatch(setAllUsersLoaded(true))

        dispatch(updateIsFetching(false))
        !getState().usersPage.isInit && dispatch(setIsInit(true))
    }
}

export const subscribe = (userId) => async (dispatch, getState) => {
    const isFollowed = selectUser(getState(), userId).followed;

    dispatch(toggleSubscribeButton(userId))
    let followResponse = isFollowed ? await usersAPI.unfollow(userId) : await usersAPI.follow(userId)
    followResponse.resultCode === 0 ? dispatch(subscribeToggle(userId)) : console.log(followResponse);
    dispatch(toggleSubscribeButton(userId));
}
