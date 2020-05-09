import React from 'react';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} activeClassName={props.active}>{props.name}</NavLink>
    );
}

export {
    DialogItem
}