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
    ],
    inputText: ''
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                text: state.inputText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                inputText: ''
            }
        case INPUT_CHANGE:
            return {
                ...state,
                inputText: action.messageText
            }
        default:
            return state;
    }

}

export default chatReducer;

//AC

export const sendMessage = () => ({
    type: SEND_MESSAGE
})

export const chatInputChange = (text) => ({
    type: INPUT_CHANGE,
    messageText: text
})