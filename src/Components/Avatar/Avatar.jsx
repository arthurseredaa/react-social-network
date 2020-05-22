import React from "react";
import s from './Avatar.module.css';

export const Avatar = (props) => {
  return (
      <div>
        <img className={s.image} src={props.imageUrl} alt={props.imageAlt} width={props.width}/>
      </div>
  )
}