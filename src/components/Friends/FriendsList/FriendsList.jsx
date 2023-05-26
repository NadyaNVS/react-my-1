import React from 'react';
import s from './FriendsList.module.css';
import FriendItem from './FriendItem/FriendItem';

const FriendsList = (props) => {
  let friendsElements = props.friends.map((friend) => (
    <FriendItem src={friend.src} alt={friend.alt} />
  ));
  return <div className={s.friendsItems}>{friendsElements}</div>;
};

export default FriendsList;
