import { chatAPI, profileAPI } from "../api/api";
import { selectImgPlaceholderSmall } from "./profilePageSelectors";

const SET_DIALOGS_IS_INIT = 'chat/SET_DIALOGS_IS_INIT'
const SET_CHAT_IS_INIT = 'chat/SET_CHAT_IS_INIT'
const SET_DIALOGS = 'chat/SET_DIALOGS'
const SET_DIALOG = 'chat/SET_DIALOG'
const SET_NEW_MESSAGE = 'chat/SET_NEW_MESSAGE'
const SET_USER_PHOTO = 'chat/SET_USER_PHOTO'
const SET_RECIPIENT_PHOTO = 'chat/SET_RECIPIENT_PHOTO'
const SET_CURRENT_PAGE = 'chat/SET_CURRENT_PAGE'
const SET_ALL_MESSAGES_LOADED = 'chat/SET_ALL_MESSAGES_LOADED'
const SET_IS_NEW_MESSAGE = 'chat/SET_IS_NEW_MESSAGE'

let initialState = {
    dialogsIsInit: false,
    chatIsInit: false,
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
    messages: {
        data: [],
        isNewMessage: false
    },
    userPhoto: null,
    recipientPhoto: null
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS_IS_INIT:
            return {
                ...state,
                dialogsIsInit: action.isInit
            }
        case SET_CHAT_IS_INIT:
            return {
                ...state,
                chatIsInit: action.isInit
            }
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: [...action.data.data]
            }
        case SET_DIALOG:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    data: [...action.data, ...state.messages.data]
                }
            }
        case SET_NEW_MESSAGE:
            let oldMessages = (state.messages.data.length % 10 === 0) ? [...state.messages.data.slice([1], [state.messages.data.length])] : [...state.messages.data]
            return {
                ...state,
                messages: {
                    ...state.messages,
                    data: [...oldMessages, ...action.data],
                    isNewMessage: true
                }
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
        case SET_IS_NEW_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    isNewMessage: action.isNewMessage
                }
            }
        default:
            return state;
    }

}

export default chatReducer;

//AC
export const setDialogsIsInit = (isInit) => ({
    type: SET_DIALOGS_IS_INIT,
    isInit
})

export const setChatIsInit = (isInit) => ({
    type: SET_CHAT_IS_INIT,
    isInit
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

export const setIsNewMessage = (isNewMessage) => ({
    type: SET_IS_NEW_MESSAGE,
    isNewMessage
})

//TC

export const initializeDialogs = () => async (dispatch, getState) => {
    await dispatch(getDialogs());
    dispatch(setDialogsIsInit(true));
}

export const initializeChat = (userId) => async (dispatch, getState) => {
    let recipientPhotoPromise = dispatch(setUserPhoto(userId, 'recipient'))
    let userPhotoPromise = dispatch(setUserPhoto(getState().auth.id, 'user'));
    let getDialogPromise = dispatch(getDialog(userId));

    await Promise.all([recipientPhotoPromise, userPhotoPromise, getDialogPromise])
    dispatch(setChatIsInit(true));
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
            if (getState().chat.messages.data.length % 10 === 0 && getState().chat.allMessagesLoaded) {
                dispatch(setCurrentPage(getState().chat.messages.data.length / 10 + 1))
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

// export const getMessage = (userId) => async (dispatch) => {
//     response = await chatAPI.getDialog(userId, 1, 1)
// }

export const sendMessage = (userId, message) => async (dispatch) => {
    let response = await chatAPI.sendMessage(userId, message);
    response.resultCode === 0 ? dispatch(getDialog(userId, 1)) : console.log(response)
}