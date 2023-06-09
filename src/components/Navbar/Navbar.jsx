import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import FriendsListContainer from '../Friends/FriendsList/FriendsListConainer';

const getStyleForNavLink = ({isActive}) =>
  isActive
    ? {
        cursor: 'default',
        color: 'gold',
        textDecoration: 'none',
        padding: 5,
      }
    : {padding: 5};

function Navbar(props) {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/profile" style={getStyleForNavLink}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" style={getStyleForNavLink}>
            Messages
          </NavLink>
        </li>

        <li className={s.item}>
          <NavLink to="/news" style={getStyleForNavLink}>
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/music" style={getStyleForNavLink}>
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/users" style={getStyleForNavLink}>
            Users
          </NavLink>
        </li>

        <li className={s.item}>
          <NavLink to="/friends" style={getStyleForNavLink}>
            Friends
          </NavLink>
        </li>
        <FriendsListContainer
        // store={props.store}
        />
        <li className={s.item}>
          <NavLink to="/settings" style={getStyleForNavLink}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
