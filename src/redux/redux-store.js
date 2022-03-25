import { combineReducers, createStore, applyMiddleware } from "redux";
import authReducer from "./authReducer";
import chatReducer from "./chatPageReducer";
import dialogsReducer from "./dialogsPageReducer"
import friendsReducer from "./friendsPageReducer";
import profileReducer from "./profilePageReducer";
import usersReducer from "./usersPageReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    auth: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    chatPage: chatReducer,
    usersPage: usersReducer,
    friendsPage: friendsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;