import { chatAPI, profileAPI } from "../api/api";
import { selectImgPlaceholderSmall } from "./profilePageSelectors";

const SET_IS_INIT = 'chat/SET_IS_INIT'
const SET_DIALOGS = 'chat/SET_DIALOGS'
const SET_DIALOG = 'chat/SET_DIALOG'
const SET_USER_PHOTO = 'chat/SET_USER_PHOTO'
const SET_RECIPIENT_PHOTO = 'chat/SET_RECIPIENT_PHOTO'
const SEND_MESSAGE = 'chat/SEND-MESSAGE'

let initialState = {
    isInit: false,
    dialogs: [
        {
            id: 4,
            userName: "test",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
            hasNewMessages: false,
            newMessagesCount: 0,
            lastDialogActivityDate: "2022-04-19T10:47:31.613",
            lastUserActivityDate: "2022-04-19T07:55:50.463",
            photos: {
                small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=1',
                large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=1'
            }
        },
        {
            id: 3,
            userName: "test2",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
            hasNewMessages: true,
            newMessagesCount: 1,
            lastDialogActivityDate: "2022-04-19T10:47:31.613",
            lastUserActivityDate: "2022-03-15T09:23:55.463",
            photos: {
                small: null,
                large: null
            }
        }
    ],
    messages: [],
    userPhoto: null,
    recipientPhoto: null
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_INIT:
            return {
                ...state,
                isInit: action.isInit
            }
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: [...action.data.data]
            }
        case SET_DIALOG:
            return {
                ...state,
                messages: [...action.data]
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                userPhoto: action.url
            }
        case SET_RECIPIENT_PHOTO:
            return {
                ...state,
                recipientPhoto: action.url
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { text: action.messageText }]
            }
        default:
            return state;
    }

}

export default chatReducer;

//AC
export const setIsInit = (isInit) => ({
    type: SET_IS_INIT,
    isInit
})

export const sendMessageAction = (messageText) => ({
    type: SEND_MESSAGE,
    messageText
})

export const setDialogs = (data) => ({
    type: SET_DIALOGS,
    data
})

export const setDialog = (data) => ({
    type: SET_DIALOG,
    data
})

export const setUserPhotoUrl = (url, target) => {
    let actionType = target === 'user' ? SET_USER_PHOTO : SET_RECIPIENT_PHOTO
    return ({
        type: actionType,
        url
    })
}

//TC

export const initializeChat = (userId) => async (dispatch, getState) => {
    let recipientPhotoPromise = dispatch(setUserPhoto(userId, 'recipient'))
    let userPhotoPromise = dispatch(setUserPhoto(getState().auth.id, 'user'));
    let getDialogPromise = dispatch(getDialog(userId));

    await Promise.all([recipientPhotoPromise, userPhotoPromise, getDialogPromise])
    dispatch(setIsInit(true));
}

const setUserPhoto = (userId, target) => async (dispatch) => {
    let photoResponse = await profileAPI.getProfileInfo(userId);
    let photo = photoResponse.photos.small ? photoResponse.photos.small : selectImgPlaceholderSmall();
    dispatch(setUserPhotoUrl(photo, target));
    return photoResponse;
}

export const startChat = (userId) => async () => {
    let response = await chatAPI.startChat(userId);
    response.resultCode === 0 ? console.log('peevo') : console.log(response)
}

export const getDialogs = () => async (dispatch) => {
    let response = await chatAPI.getDialogs();
    response.status === 200 ? dispatch(setDialogs(response)) : console.log(response)
    return response;
}

export const getDialog = (userId) => async (dispatch) => {
    let response = await chatAPI.getDialog(userId);
    debugger;
    response.status === 200 ? dispatch(setDialog(response.data.items)) : console.log(response)
    return response;
}

export const sendMessage = (userId, message) => async (dispatch) => {
    let response = await chatAPI.sendMessage(userId, message);
    response.resultCode === 0 ? dispatch(getDialog(userId)) : console.log(response)
}