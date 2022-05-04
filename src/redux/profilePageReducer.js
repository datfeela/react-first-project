import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST',
    SET_PROFILE_INFO = 'profile/GET_PROFILE_INFO',
    SET_PROFILE_PHOTOS = 'profile/SET_PROFILE_PHOTOS',
    SET_STATUS = 'profile/SET_STATUS',
    INITIALIZE_SUCCESS = 'profile/INITIALIZE_SUCCESS',
    SET_FRIENDS = 'profile/SET_FRIENDS'

let initialState = {
    isInitialized: false,
    profileInfo: null,
    profileStatus: null,
    friends: [],
    friendsCount: null,
    posts: {
        22988: [
            {
                authorId: 22988,
                author: 'datfeela',
                date: '15.01.2022',
                id: 2,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, incidunt ex laboriosam totam ipsa, nobis et sint dicta atque a harum amet maxime esse expedita saepe doloribus quo tempore quos quidem exercitationem modi architecto accusantium? Porro facere pariatur architecto suscipit ducimus perferendis, in voluptas veniam perspiciatis dolore accusamus sint quibusdam!'
            }, {
                authorId: 23506,
                author: 'datfeelaTest',
                id: 1,
                date: '01.05.2021',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem odit. Animi magni provident rerum veritatis nam iste illum dolor, neque blanditiis consectetur. Ducimus dicta facilis maxime esse incidunt, ut, excepturi ipsum sunt reiciendis similique ad sapiente exercitationem optio unde nulla sit possimus inventore rem aliquid accusantium cupiditate quos laborum pariatur! Doloribus esse facere perspiciatis veniam neque pariatur vitae iste eius fugiat nihil eos natus provident rerum, ducimus cum rem soluta quisquam aspernatur animi saepe non nisi culpa? Laudantium eius doloribus numquam repudiandae at aspernatur id distinctio vero voluptate reprehenderit deleniti, aliquid accusantium fugit dolorem! Maxime excepturi adipisci in. Odit.'
            },
        ]
    }
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }
        case ADD_POST:
            // debugger;
            let newPost = {
                authorId: action.author.id,
                author: action.author.name,
                date: action.date,
                text: action.text,
                id: state.posts[action.targetUserId] ? state.posts[action.targetUserId].length + 1 : 1
            }
            //Добавляю для целевого пользователя пустой массив, в который будут добавляться посты, если у пользователя еще нет постов
            if (!state.posts[action.targetUserId]) {
                state.posts = { ...state.posts, [action.targetUserId]: [] }
            }
            return {
                ...state,
                posts: { ...state.posts, [action.targetUserId]: [newPost, ...state.posts[action.targetUserId]] }
            }
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        case SET_PROFILE_PHOTOS:
            return {
                ...state,
                profileInfo: { ...state.profileInfo, photos: action.photos }
            }
        case SET_STATUS:
            return {
                ...state,
                profileStatus: action.status
            }
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends,
                friendsCount: action.friendsCount
            }
        default:
            return state;
    }
}

export default profileReducer;

//AC

const setInitializeSuccess = () => ({
    type: INITIALIZE_SUCCESS
})

export const setProfileInfo = (profileInfo) => ({
    type: SET_PROFILE_INFO,
    profileInfo
})

export const savePhotoSuccess = (photos) => ({
    type: SET_PROFILE_PHOTOS,
    photos
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const addPostSuccess = (text, author, date, targetUserId) => ({
    type: ADD_POST,
    text,
    author,
    date,
    targetUserId
})

const getFriendsSuccess = (friends, friendsCount) => ({
    type: SET_FRIENDS,
    friends,
    friendsCount
})

//TC

export const addPost = (text, targetUserId) => async (dispatch, getState) => {
    //костыль для создания автора и даты поста без серверного api
    const date = `${new Date().toLocaleDateString()}`;
    const authorId = getState().auth.id;

    let response = await profileAPI.getProfileInfo(authorId);
    let author = {
        id: response.userId,
        name: response.fullName
    }
    dispatch(addPostSuccess(text, author, date, targetUserId));
}

export const initializeProfile = (userId) => async (dispatch) => {
    const profileInfoPromise = dispatch(getProfileInfo(userId));
    const statusPromise = dispatch(getStatus(userId));
    const getFriendsPromise = dispatch(getFriends());
    Promise.all([profileInfoPromise, statusPromise, getFriendsPromise])
        .then(() => {
            dispatch(setInitializeSuccess())
        })
}

export const getProfileInfo = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfileInfo(userId)
    dispatch(setProfileInfo(response))
    return response;
}

export const getFriends = () => async (dispatch) => {
    let response = await usersAPI.getUsers(6, 1, true, "")
    dispatch(getFriendsSuccess(response.items, response.totalCount))
    return response;
}

export const changeProfileInfo = (userId, fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts) => async (dispatch) => {
    let response = await profileAPI.setProfileInfo(userId, fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts)
    debugger;
    response.resultCode === 0 ? dispatch(getProfileInfo(userId)) : console.log(response);
    return response;
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
    return response
}

export const updateStatus = (status) => async (dispatch) => {
    //updating
    let response = await profileAPI.updateStatus(status)
    response.resultCode === 0 ? dispatch(setStatus(status)) : console.log(response);
    //update finished
}

export const savePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.setPhoto(photo)
    response.resultCode === 0 ? dispatch(savePhotoSuccess(response.data.photos)) : console.log(response);
    return response;
}
