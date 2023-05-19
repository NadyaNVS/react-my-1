import React from "react";
import s from "./Header.module.css";

function Header(props) {
  return (
    <header className={s.header}>
      <img alt="#" src={props.img} />
    </header>
  );
}

export default Header;
