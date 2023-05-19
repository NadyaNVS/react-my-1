import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={s.infoBlock}>
      <img
        alt="#"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      />
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
