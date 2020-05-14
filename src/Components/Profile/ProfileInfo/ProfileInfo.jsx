import React from 'react';
import s from './ProfileInfo.module.css';
import {FriendList} from './FriendList/FriendList';

const ProfileInfo = (props) => {
  return(
    <div className={s.profileInfoWrapper}>
      <img className={s.headImage} src="https://www.w3schools.com/howto/img_snow_wide.jpg"/>
      <div className={s.descriptionBlock}>
        <img className={s.avatar} src="https://igorzuevich.com/wp-content/uploads/2017/12/avatarka-v-telegram.png"/>
      </div>
        {/*<StoreContext.Consumer>{*/}
        {/*    (store) => <FriendList state={store.getState().profilePage.friends}/>*/}
        {/*}*/}
        {/*</StoreContext.Consumer>*/}
    </div>
  );
}

export {
    ProfileInfo
};
