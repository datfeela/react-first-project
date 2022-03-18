let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Ivan Ivan 1",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
        },
        {
            id: 2,
            name: "Ivan Ivan 2",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
        },
        {
            id: 3,
            name: "Ivan Ivan 3",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
        },
        {
            id: 4,
            name: "Ivan Ivan 4",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
        },
        {
            id: 5,
            name: "Ivan Ivan 5",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
        },
        {
            id: 6,
            name: "Ivan Ivan 6",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
        },
        {
            id: 7,
            name: "Ivan Ivan 7",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
        },
        {
            id: 8,
            name: "Ivan Ivan 8",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
        },
    ]
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default dialogsPageReducer;