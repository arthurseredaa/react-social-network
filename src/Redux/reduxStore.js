import {combineReducers, createStore} from "redux";
import {profile} from "./Reducers/profile";
import {sidebar} from "./Reducers/sidebar";
import {friends} from "./Reducers/friends";
import {dialogs} from "./Reducers/dialogs";
import {findUsers} from "./Reducers/findUsers";

let reducers = combineReducers({
    profilePage: profile,
    dialogsPage: dialogs,
    sidebar: sidebar,
    friendsPage: friends,
    findUsersPage: findUsers
})

let store = createStore(reducers);

window.store = store;

export {
    store
}