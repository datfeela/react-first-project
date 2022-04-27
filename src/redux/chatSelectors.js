import { createSelector } from "reselect"

export const selectDialogsIsInit = (state) => {
    return state.chat.dialogsIsInit
}

export const selectChatIsInit = (state) => {
    return state.chat.chatIsInit
}

export const selectDialogsSearchTerm = (state) => {
    return state.chat.dialogsSearchTerm
}

const selectDialogsWOSearchTerm = (state) => {
    return state.chat.dialogs
}

export const selectDialogs = createSelector(selectDialogsWOSearchTerm, selectDialogsSearchTerm, (dialogs, searchTerm) => {
    let filteredDialogs = dialogs.filter(dialog => dialog.userName.includes(searchTerm))
    return filteredDialogs;
})

export const selectMessages = (state) => {
    return state.chat.messages
}

export const selectUserImg = (state) => {
    return state.chat.userPhoto
}

export const selectRecipientName = (state) => {
    return state.chat.recipientName
}

export const selectRecipientImg = (state) => {
    return state.chat.recipientPhoto
}