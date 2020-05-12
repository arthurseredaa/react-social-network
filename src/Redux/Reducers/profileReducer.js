import {nanoid} from 'nanoid';

const ADD_POST = "ADD-POST",
    UPDATE_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, postText: "Hello, world!", likesCount: 2},
    ],
    newPostText: "",
    friends: [
        {id: 1, name: "Arthur", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: true},
        {id: 2, name: "Hrustya", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: true},
        {id: 3, name: "Yura", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: false},
        {id: 4, name: "Nazar", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: true},
        {id: 5, name: "ZayaBeats", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: true},
        {id: 6, name: "Maksimilian", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: false},
        {id: 7, name: "Pitro", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: false},
        {id: 8, name: "Olko", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: true},
    ],
};

//state = state.profilePage
const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: nanoid(10),
                postText: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            break;
        default:
            return state
    }

    return state;
}

const addPostActionCreator = () => ({type: ADD_POST}),
    updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export {
    profileReducer,
    addPostActionCreator,
    updatePostTextActionCreator
}