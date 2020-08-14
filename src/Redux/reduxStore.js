import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { profile } from "./Reducers/profile";
import { sidebar } from "./Reducers/sidebar";
import { friends } from "./Reducers/friends";
import { dialogs } from "./Reducers/dialogs";
import { findUsers } from "./Reducers/findUsers";
import { authReducer } from "./Reducers/authorization";
import thunk from "redux-thunk";

let reducers = combineReducers({
  profilePage: profile,
  dialogsPage: dialogs,
  sidebar: sidebar,
  friendsPage: friends,
  findUsersPage: findUsers,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
