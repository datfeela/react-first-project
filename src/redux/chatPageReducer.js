const SEND_MESSAGE = 'SEND-MESSAGE',
    INPUT_CHANGE = 'INPUT-CHANGE';

let initialState = {
    messages: [
        {
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, incidunt ex laboriosam totam ipsa.'
        },
        {
            text: 'Lorem ipsum.'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quae nostrum provident cum, nemo itaque, distinctio excepturi molestiae repellat fuga ipsum ea voluptate temporibus.'
        },
    ]
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
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

export const sendMessage = (messageText) => ({
    type: SEND_MESSAGE,
    messageText
})

export const chatInputChange = (text) => ({
    type: INPUT_CHANGE,
    messageText: text
})