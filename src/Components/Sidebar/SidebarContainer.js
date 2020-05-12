import React from 'react';
import {StoreContext} from "../../StoreContext";
import {Sidebar} from "./Sidebar";

const SidebarContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let friendsState = store.getState().profilePage.friends,
                    friendsArray = friendsState.filter(item => item.online === true),
                    online = 0;
                online = friendsArray.length;
                console.log(friendsArray);
                return(
                    <Sidebar usersOnline={online}/>
                )
            }
        }
        </StoreContext.Consumer>
    );
}

export {
    SidebarContainer
};