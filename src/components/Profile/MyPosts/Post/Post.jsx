import React from "react";
import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.item}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
        alt="avatar"
      />
      {props.message}
      <div>like {props.count}</div>
    </div>
  );
}

export default Post;
