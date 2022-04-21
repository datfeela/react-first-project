import { chatAPI, profileAPI } from "../api/api";
import { selectImgPlaceholderSmall } from "./profilePageSelectors";

const SET_IS_INIT = 'chat/SET_IS_INIT'
const SET_DIALOGS = 'chat/SET_DIALOGS'
const SET_DIALOG = 'chat/SET_DIALOG'
const SET_NEW_MESSAGE = 'chat/SET_NEW_MESSAGE'
const RESET_DIALOG = 'chat/RESET_DIALOG'
const SET_USER_PHOTO = 'chat/SET_USER_PHOTO'
const SET_RECIPIENT_PHOTO = 'chat/SET_RECIPIENT_PHOTO'
const SEND_MESSAGE = 'chat/SEND-MESSAGE'
const SET_CURRENT_PAGE = 'chat/SET_CURRENT_PAGE'
const SET_ALL_MESSAGES_LOADED = 'chat/SET_ALL_MESSAGES_LOADED'

let initialState = {
    isInit: false,
    currentPage: 1,
    allMessagesLoaded: false,
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
                messages: [...action.data, ...state.messages]
            }
        case SET_NEW_MESSAGE:
            let oldMessages = (state.messages.length % 10 === 0) ? [...state.messages.slice([1], [state.messages.length])] : [...state.messages]
            return {
                ...state,
                messages: [...oldMessages, ...action.data]
            }

        case RESET_DIALOG://!
            return {
                ...state,
                messages: []
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_ALL_MESSAGES_LOADED:
            return {
                ...state,
                allMessagesLoaded: action.isLoaded
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

export const setNewMessage = (data) => ({
    type: SET_NEW_MESSAGE,
    data
})


export const resetDialog = () => ({
    type: RESET_DIALOG
})

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    page
})

export const setAllMessagesLoaded = (isLoaded) => ({
    type: SET_ALL_MESSAGES_LOADED,
    isLoaded
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

export const getDialog = (userId, msgToLoadCount = 10) => async (dispatch, getState) => {
    let response;
    //если загружается 1 сообщение, то диспатчим его добавление в конец массива(setNewMessage)
    if (msgToLoadCount === 1) {
        response = await chatAPI.getDialog(userId, 1, msgToLoadCount);
        if (response.status === 200) {
            dispatch(setNewMessage(response.data.items))
            //если количество сообщений в сторе кратно десяти, сообщения из начала массива будут вырезаться из-за особенностей запроса на сервер
            //нужно сбросить запрет на загрузку новых сообщений и обновить номер страницы для загрузки старых сообщений
            if (getState().chat.messages.length % 10 === 0 && getState().chat.allMessagesLoaded) { 
                dispatch(setCurrentPage(getState().chat.messages.length / 10 + 1))
                dispatch(setAllMessagesLoaded(false))
            }
        }
        else {
            console.log(response)
        }
    }
    //если загружается больше 1 сообщения, значит, нужны старые сообщения в обычном количестве, диспатчим добавление в начало массива(setDialog)
    if (msgToLoadCount > 1 && !getState().chat.allMessagesLoaded) {
        let currentPage = getState().chat.currentPage;
        response = await chatAPI.getDialog(userId, currentPage, msgToLoadCount);
        if (response.status === 200) {
            dispatch(setDialog(response.data.items))
            dispatch(setCurrentPage(currentPage + 1))
            response.data.items.length < 10 && dispatch(setAllMessagesLoaded(true))
        }
        else {
            console.log(response)
        }
    }
    return response;
}

export const sendMessage = (userId, message) => async (dispatch) => {
    let response = await chatAPI.sendMessage(userId, message);
    response.resultCode === 0 ? dispatch(getDialog(userId, 1)) : console.log(response)
}


export const cleanUp = () => (dispatch) => {
    dispatch(setIsInit(false))
    dispatch(setAllMessagesLoaded(false))
    dispatch(setCurrentPage(1))
    dispatch(resetDialog())
}