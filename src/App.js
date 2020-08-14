import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Music } from "./Components/Music/Music";
import { Settings } from "./Components/Settings/Settings";
// import { DialogsContainer as Dialogs } from "./Components/Dialogs/DialogsContainer";
import { NewsfeedContainer } from "./Components/Newsfeed/NewsfeedContainer";
import { FriendsContainer } from "./Components/Friends/FriendsContainer";
import { ProfileContainer } from "./Components/Profile/ProfileContainer";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Header } from "./Components/Header/Header";
import { Login } from "./Components/Login/Login";
import { store } from "./Redux/reduxStore";
import { Provider } from "react-redux";
import { Preloader } from "./Components/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);

// const ProfileContainer = React.lazy(() =>
//   import("./Components/Profile/ProfileContainer")
// );

export const SocialNetwork = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export const App = () => {
  return (
    <>
      <Route path="/login" component={Login} />
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="appWrapperContent">
          <Route
            path="/profile/:userId?"
            render={() => {
              return (
                <ProfileContainer />
                // <React.Suspense fallback={<Preloader />}>
                //   <ProfileContainer />
                // </React.Suspense>
              );
            }}
          />
          <Route
            path="/dialogs"
            render={() => {
              return (
                <React.Suspense fallback={<Preloader />}>
                  <DialogsContainer />
                </React.Suspense>
              );
            }}
          />
          <Route path="/friends" component={FriendsContainer} />
          <Route path="/newsfeed" component={NewsfeedContainer} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </>
  );
};
