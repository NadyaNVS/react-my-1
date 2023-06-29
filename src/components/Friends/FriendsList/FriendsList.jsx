import React from 'react';
import s from './FriendsList.module.css';
import FriendItem from './FriendItem/FriendItem';

const FriendsList = (props) => {
  let state = props.friendsSide;
  let friendsElements = state.friends.map((friend, index) => (
    <FriendItem key={index} src={friend.src} alt={friend.alt} />
  ));
  return <div className={s.friendsItems}>{friendsElements}</div>;
};

export default FriendsList;
