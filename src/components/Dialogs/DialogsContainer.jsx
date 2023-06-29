import React from 'react';
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let sendMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onMessageChange = (message) => {
    let action = updateNewMessageTextCreator(message);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      dialogsPage={state}
      updateNewMessageText={onMessageChange}
      sendMessage={sendMessage}
    />
  );
};

export default DialogsContainer;
