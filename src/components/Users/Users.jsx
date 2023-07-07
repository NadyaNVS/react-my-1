import React from 'react';
import s from './Users.module.css';
import axios from 'axios';
import avatar from '../../assets/images/avatar.svg';

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.onSetUsers(response.data.items);
      });
  }

  onFollowClick = (userId) => () => {
    this.props.onFollow(userId);
  };
  onUnfollowClick = (userId) => () => {
    this.props.onUnfollow(userId);
  };

  // getUsers = () => {

  // };
  render() {
    return (
      <div>
        {/* <button onClick={this.getUsers}>getUsers</button> */}
        {this.props.users.map((user) => (
          <div key={user.id}>
            <div className={s.followInfo}>
              <div className={s.avatarWrapper}>
                <img
                  alt=""
                  src={user.photos.small != null ? user.photos.small : avatar}
                />
              </div>
              {user.followed ? (
                <button onClick={this.onUnfollowClick(user.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={this.onFollowClick(user.id)}>Follow</button>
              )}
            </div>
            <div>
              <div>
                <span>{user.name}</span>
                <span>{user.status}</span>
              </div>
              <div>
                <span>{'user.location.country'}</span>
                <span>{'user.location.city'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
