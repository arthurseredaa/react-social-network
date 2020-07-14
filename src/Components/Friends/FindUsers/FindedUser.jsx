import React from "react";
import { nanoid } from "nanoid";
import { Avatar } from "../../Avatar/Avatar";
import basicAvatar from "../../../assets/images/basic-avatar.png";
import Button from "@material-ui/core/Button";

export const FindedUser = (props) => {
  return (
    <div key={nanoid(5)}>
      <div className={"avatarWrapper"}>
        <Avatar
          imageUrl={
            props.user.photos.small !== null
              ? props.user.photos.small
              : basicAvatar
          }
          width={"80"}
          imageAlt={"user avatar"}
        />
        <Button
          color="default"
          variant="contained"
          onClick={() => props.btnInfo.btnFunc(props.user.id)}
        >
          {props.btnInfo.btnText}
        </Button>
      </div>
      <div className="textInfo">
        <h4>{props.user.name}</h4>
        <p>user.email</p>
      </div>
      <div className="location">
        <p>user.address.city</p>
        <p>user.address.street</p>
      </div>
    </div>
  );
};
