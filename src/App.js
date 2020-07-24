import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Music } from "./Components/Music/Music";
import { Settings } from "./Components/Settings/Settings";
import { DialogsContainer } from "./Components/Dialogs/DialogsContainer";
import { NewsfeedContainer } from "./Components/Newsfeed/NewsfeedContainer";
import { FriendsContainer } from "./Components/Friends/FriendsContainer";
import { ProfileContainer } from "./Components/Profile/ProfileContainer";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Header } from "./Components/Header/Header";
import { Login } from "./Components/Login/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="appWrapperContent">
          <Route path="/profile/:userId?" component={ProfileContainer} />
          <Route path="/dialogs" component={DialogsContainer} />
          <Route path="/friends" component={FriendsContainer} />
          <Route path="/newsfeed" component={NewsfeedContainer} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};
