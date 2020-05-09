import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Sidebar} from './Components/Sidebar/Sidebar';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Newsfeed} from "./Components/Newsfeed/Newsfeed";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";

//TODO: розприділити через store пропсами всьо на свої місця

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className="appWrapperContent">
                    <Route path="/profile" render={() =>
                        <Profile profilePage={props.appState} dispatch={props.dispatch} store={props.store}/>} />

                    <Route path="/dialogs" render={() =>
                        <Dialogs dialogsPage={props.appState} dispatch={props.dispatch}/>} />

                    <Route path="/newsfeed" component={Newsfeed}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
