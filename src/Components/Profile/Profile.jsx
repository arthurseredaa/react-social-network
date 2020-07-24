import React from "react";
import s from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { Preloader } from "../Preloader/Preloader";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { shallowEqual } from "react-redux";

// export class Profile extends React.PureComponent {
//   shouldComponentUpdate(nextProps, nextState) {
//     return (
//       shallowEqual(nextProps, this.props) && shallowEqual(nextState, this.state)
//     );
//   }

//   render() {
//     if (!this.props.profile) {
//       return (
//         <div className={s.profileWrapper}>
//           <Preloader />
//         </div>
//       );
//     } else {
//       console.log("render");
//       return (
//         <div className={s.profileWrapper}>
//           <ProfileInfo {...this.props} />
//           <MyPostsContainer />
//         </div>
//       );
//     }
//   }
// }

export const Profile = React.memo((props) => {
  if (!props.profile) {
    return (
      <div className={s.profileWrapper}>
        <Preloader />
      </div>
    );
  } else {
    return (
      <div className={s.profileWrapper}>
        <ProfileInfo {...props} />
        <MyPostsContainer />
      </div>
    );
  }
});
