import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} + ${s.active}`}>
      <img src={props.avatar} alt="avatar" />
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
