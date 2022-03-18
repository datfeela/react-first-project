const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // { id: 1, isSubscribed: true, subscribedOn: true, name: 'Ivan Ivan', location: 'Lorem City', education: 'Lorem Univ.' },
        // { id: 2, isSubscribed: true, subscribedOn: false, name: 'Ivan Ivan2', location: 'Lorem City', education: 'Lorem Univ.' },
        // { id: 3, isSubscribed: true, subscribedOn: true, name: 'Ivan Ivan3', location: 'Lorem City', education: 'Lorem Univ.' },
        // { id: 4, isSubscribed: true, subscribedOn: false, name: 'Ivan Ivan4', location: 'Lorem City', education: 'Lorem Univ.' },
        // { id: 5, isSubscribed: true, subscribedOn: true, name: 'Ivan Ivan5', location: 'Lorem City', education: 'Lorem Univ.' },
        // { id: 6, isSubscribed: true, subscribedOn: false, name: 'Ivan Ivan6', location: 'Lorem City', education: 'Lorem Univ.' },
        // { id: 7, isSubscribed: true, subscribedOn: true, name: 'Ivan Ivan7', location: 'Lorem City', education: 'Lorem Univ.' }
    ]
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

