import React from 'react';
import s from './ProfileInfo.module.css';
import {Avatar} from "../../Avatar/Avatar";
import defaultAvatar from '../../../assets/images/basic-avatar.png';
const ProfileInfo = (props) => {
  let contacts = Object.keys(props.profile.contacts).map(elem => {
    if(props.profile.contacts[elem]) {
      return elem;
    }
  })

  return(
    <div className={s.profileInfoWrapper}>
      <img className={s.headImage} src="https://www.w3schools.com/howto/img_snow_wide.jpg"/>
      <div className={s.descriptionBlock}>
        <Avatar imageUrl={props.profile.photos.small === null ? defaultAvatar : props.profile.photos.small} width={90}/>
        <div className={s.nameAndStatus}>
          <h1 className={s.userFullName}>{props.profile.fullName}</h1>
          <p className={s.userStatus}>{props.profile.aboutMe}</p>
        </div>
        <div className={s.jobAndContacts}>
          <div className={s.job}>
            <h1 className={s.jobTitle}>Job description</h1>
            <h3 className={s.jobStatus}><span>Status: </span>{props.profile.lookingForAJob ? "В поиске работы" : "Не ищу работу"}</h3>
            <p className={s.jobStatusDescr}><span>Details: </span>{props.profile.lookingForAJobDescription}</p>
          </div>
          <div className={s.contacts}>
            <h4 className={s.contactsTitle}>Contacts</h4>
            {contacts.map(elem => {
              return <a key={'key'} href={props.profile.contacts[elem]}>{elem}</a>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export {
    ProfileInfo
};
