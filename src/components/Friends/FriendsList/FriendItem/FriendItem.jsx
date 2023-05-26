import React from 'react';
import s from './../FriendsList.module.css';

const FriendItem = (props) => {
  return (
    <div className={s.friendItem}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default FriendItem;
