import React from 'react';
// import s from "./Profile.module.css";
import ProfileInfo from './ProfileInfo.jsx/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
}

export default Profile;
