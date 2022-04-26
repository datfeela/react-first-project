export const selectDialogsIsInit = (state) => {
    return state.chat.dialogsIsInit
}

export const selectChatIsInit = (state) => {
    return state.chat.chatIsInit
}

export const selectDialogs = (state) => {
    return state.chat.dialogs
}

export const selectMessages = (state) => {
    return state.chat.messages
}

export const selectUserImg = (state) => {
    return state.chat.userPhoto
}

export const selectRecipientImg = (state) => {
    return state.chat.recipientPhoto
}