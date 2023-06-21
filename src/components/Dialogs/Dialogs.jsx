import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch({type: 'ADD-MESSAGE'});
  };

  let onMessageChenge = () => {
    let message = newMessageElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newTextMessage: message});
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>
        <div className={s.messagesWrapper}>{messagesElements}</div>
        <div className={s.typeMessage}>
          <textarea
            onChange={onMessageChenge}
            ref={newMessageElement}
            value={props.dialogsPage.newMessageText}
          />
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
