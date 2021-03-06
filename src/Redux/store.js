import { profile } from "./Reducers/profile";
import { dialogs } from "./Reducers/dialogs";

let store = {
  _state: {
    profilePage: {
      posts: [{ id: 1, postText: "Hello, world!", likesCount: 2 }],
      newPostText: "",
      friends: [
        {
          id: 1,
          name: "Arthur",
          avatarUrl:
            "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png",
        },
        {
          id: 2,
          name: "Hrustya",
          avatarUrl:
            "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png",
        },
        {
          id: 3,
          name: "Yura",
          avatarUrl:
            "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png",
        },
        {
          id: 4,
          name: "Nazar",
          avatarUrl:
            "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png",
        },
        {
          id: 5,
          name: "ZayaBeats",
          avatarUrl:
            "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png",
        },
        {
          id: 6,
          name: "Maksimilian",
          avatarUrl:
            "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png",
        },
        {
          id: 7,
          name: "Pitro",
          avatarUrl:
            "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png",
        },
        {
          id: 8,
          name: "Olko",
          avatarUrl:
            "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png",
        },
      ],
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Arthur" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "CJ" },
        { id: 4, name: "Victor" },
      ],
      messages: [{ id: 1, message: "Hello my friend! How's life?" }],
      newMessageText: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },
  _addPost() {
    let newPost = {
      id: this._state.profilePage.posts.length + 1,
      postText: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._updateTextareaText("");
    this._callSubscriber(this._state);
  },
  _updateTextareaText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  _addMessage() {
    let newMessage = {
      id: this._state.dialogsPage.messages.length + 1,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._callSubscriber(this._state);
    this._updateMessage("");
  },
  _updateMessage(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  //types: ADD-POST, UPDATE-NEW-POST-TEXT, ADD-MESSAGE, UPDATE-MESSAGE
  dispatch(action) {
    this._state.profilePage = profile(this._state.profilePage, action);
    this._state.dialogsPage = dialogs(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;
window.state = store.getState();

export { store };
