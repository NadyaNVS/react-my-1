import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
  let onFollowClick = (userId) => () => {
    props.onFollow(userId);
  };
  let onUnfollowClick = (userId) => () => {
    props.onUnfollow(userId);
  };

  if (props.users.length === 0) {
    props.onSetUsers([
      {
        id: 1,
        avatar:
          'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp',
        followed: false,
        fullName: 'Dmitry',
        status: 'I am looking for a job',
        location: {city: 'Minsk', country: 'Belarus'},
      },
      {
        id: 2,
        avatar:
          'https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
        followed: true,
        fullName: 'Olga',
        status: 'I like football',
        location: {city: 'Moscow', country: 'Russia'},
      },
      {
        id: 3,
        avatar:
          'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp',
        followed: true,
        fullName: 'Andrew',
        status: "I'm on vacation",
        location: {city: 'Philadelphia', country: 'United States'},
      },
      {
        id: 4,
        avatar:
          'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp',
        followed: false,
        fullName: 'Sergei',
        status: "I'm a frontend developer",
        location: {city: 'Minsk', country: 'Belarus'},
      },
    ]);
  }

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div className={s.followInfo}>
            <div className={s.avatarWrapper}>
              <img alt="" src={user.avatar} />
            </div>
            {user.followed ? (
              <button onClick={onUnfollowClick(user.id)}>Unfollow</button>
            ) : (
              <button onClick={onFollowClick(user.id)}>Follow</button>
            )}
          </div>
          <div>
            <div>
              <span>{user.fullName}</span>
              <span>{user.status}</span>
            </div>
            <div>
              <span>{user.location.country}</span>
              <span>{user.location.city}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
