const ADD_POST = "ADD-POST",
    UPDATE_POST_TEXT = "UPDATE-NEW-POST-TEXT";

//state = state.profilePage
const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
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
            console.log('Error in switch/case {profileReducer}')
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