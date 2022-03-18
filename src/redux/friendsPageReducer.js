let initialState = {
    friends: [
        {
            id: 1,
            name: 'Ivan Ivan 1',
        },
        {
            id: 2,
            name: 'Ivan Ivan 2',
        },
        {
            id: 3,
            name: 'Ivan Ivan 3',
        },
        {
            id: 4,
            name: 'Ivan Ivan 4',
        },
        {
            id: 5,
            name: 'Ivan Ivan 5',
        },
    ]
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default friendsReducer;