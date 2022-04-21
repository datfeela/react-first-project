import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";
import friendsReducer from "./friendsPageReducer";
import profileReducer from "./profilePageReducer";
import usersReducer from "./usersPageReducer";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./appReducer";

let reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    profilePage: profileReducer,
    chat: chatReducer,
    usersPage: usersReducer,
    friendsPage: friendsReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true
}) || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store = store;

export default store;