import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Music } from "./Components/Music/Music";
import { Settings } from "./Components/Settings/Settings";
import { DialogsContainer } from "./Components/Dialogs/DialogsContainer";
import { SidebarContainer } from "./Components/Sidebar/SidebarContainer";
import { NewsfeedContainer } from "./Components/Newsfeed/NewsfeedContainer";
import { FriendsContainer } from "./Components/Friends/FriendsContainer";
import { ProfileContainer } from "./Components/Profile/ProfileContainer";
import { HeaderContainer } from "./Components/Header/HeaderContainer";
import { LoginContainer } from "./Components/Login/LoginContainer";

export const App = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={LoginContainer} />
      <div className="app-wrapper">
        <HeaderContainer />
        <SidebarContainer />
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
