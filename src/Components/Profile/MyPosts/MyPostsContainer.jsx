import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPost, updatePostText} from "../../../Redux/Actions/profile";

let mapStateToProps = (state) => ({posts: state.profilePage.posts,
                                   newPostText: state.profilePage.newPostText});

const MyPostsContainer = connect(mapStateToProps, {addPost, updatePostText})(MyPosts);

export {
    MyPostsContainer
};