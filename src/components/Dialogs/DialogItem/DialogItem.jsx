import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} + ${s.active}`}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
        alt="avatar"
      />
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
