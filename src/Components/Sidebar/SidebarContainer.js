import React from 'react';
import {Sidebar} from "./Sidebar";

const SidebarContainer = () => {
    return (<Sidebar />
        // <StoreContext.Consumer>{
        //     (store) => {
        //         let friendsState = store.getState().profilePage.friends,
        //             friendsArray = friendsState.filter(item => item.online === true),
        //             online = friendsArray.length;
        //         return(
        //             <Sidebar usersOnline={online}/>
        //         )
        //     }
        // }
        // </StoreContext.Consumer>
    );
}

export {
    SidebarContainer
};