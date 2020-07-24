import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

// export class MyPosts extends React.Component {
//   render() {
//     let newPostRef = React.createRef();

//     const addNewPost = () => {
//       newPostRef.current.value !== ""
//         ? this.props.addPost()
//         : (newPostRef.current.value =
//             "Перед отправкой поста напишите что-нибудь");
//     };

//     const onPostChange = () =>
//       this.props.updatePostText(newPostRef.current.value);
//     console.log("RENDER");
//     console.log(this.props);
//     return (
//       <div className={s.postsWrapper}>
//         <h3>My posts</h3>
//         <div className={s.createPost}>
//           <div>
//             <TextField
//               fullWidth
//               id="standard-full-width"
//               label="Write your post..."
//               variant="filled"
//               onChange={onPostChange}
//               inputRef={newPostRef}
//               value={this.props.newPostText}
//             />
//           </div>
//           <Button variant="contained" onClick={addNewPost}>
//             Publicate
//           </Button>
//         </div>
//         <div className={s.posts}>
//           {this.props.posts.map((p) => (
//             <Post key={p.id} postText={p.postText} likesCount={p.likesCount} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

export const MyPosts = (props) => {
  let newPostRef = React.createRef();

  const addNewPost = () => {
    newPostRef.current.value !== ""
      ? props.addPost()
      : (newPostRef.current.value =
          "Перед отправкой поста напишите что-нибудь");
  };

  const onPostChange = () => props.updatePostText(newPostRef.current.value);

  return (
    <div className={s.postsWrapper}>
      <h3>My posts</h3>
      <div className={s.createPost}>
        <div>
          <TextField
            fullWidth
            id="standard-full-width"
            label="Write your post..."
            variant="filled"
            onChange={onPostChange}
            inputRef={newPostRef}
            value={props.newPostText}
          />
        </div>
        <Button variant="contained" onClick={addNewPost}>
          Publicate
        </Button>
      </div>
      <div className={s.posts}>
        {props.posts.map((p) => (
          <Post key={p.id} postText={p.postText} likesCount={p.likesCount} />
        ))}
      </div>
    </div>
  );
};
