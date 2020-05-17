import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Profile} from './Components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {SidebarContainer} from "./Components/Sidebar/SidebarContainer";
import {NewsfeedContainer} from "./Components/Newsfeed/NewsfeedContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <SidebarContainer/>
                <div className="appWrapperContent">
                    <Route path="/profile" render={() =><Profile />} />
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/newsfeed" component={NewsfeedContainer}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
