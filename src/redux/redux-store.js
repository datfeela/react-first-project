import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import chatReducer from "./chatPageReducer";
import dialogsReducer from "./dialogsPageReducer"
import friendsReducer from "./friendsPageReducer";
import profileReducer from "./profilePageReducer";
import usersReducer from "./usersPageReducer";

let reducers = combineReducers({
    auth: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    chatPage: chatReducer,
    usersPage: usersReducer,
    friendsPage: friendsReducer
})

let store = createStore(reducers);

window.store = store;

export default store;