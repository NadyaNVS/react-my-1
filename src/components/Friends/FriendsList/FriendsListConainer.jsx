import FriendsList from './FriendsList';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    friendsSide: state.friendsSide,
  };
};

const FriendsListContainer = connect(mapStateToProps)(FriendsList);

export default FriendsListContainer;
