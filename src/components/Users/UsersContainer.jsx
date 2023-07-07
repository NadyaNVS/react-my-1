import {connect} from 'react-redux';
import Users from './Users2';
import {followAC, unfollowAC, setUsersAC} from '../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (userId) => {
      let action = followAC(userId);
      dispatch(action);
    },
    onUnfollow: (userId) => {
      let action = unfollowAC(userId);
      dispatch(action);
    },
    onSetUsers: (users) => {
      let action = setUsersAC(users);
      dispatch(action);
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
