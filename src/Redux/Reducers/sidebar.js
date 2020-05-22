let initialState = {
    links: [
        {sidebarLink: "Profile", url: "profile"},
        {sidebarLink: "Newsfeed", url: "newsfeed"},
        {sidebarLink: "Dialogs", url: "dialogs"},
        {sidebarLink: "Friends", url: "friends/my-friends"},
        {sidebarLink: "Music", url: "music"},
        {sidebarLink: "Settings", url: "settings"},
    ]
}

const sidebar = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export {
    sidebar,
}