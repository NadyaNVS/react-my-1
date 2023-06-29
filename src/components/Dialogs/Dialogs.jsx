import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog, index) => (
    <DialogItem key={index} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message, index) => (
    <Message key={index} message={message.message} />
  ));

  // let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = (e) => {
    let message = e.target.value;
    props.updateNewMessageText(message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>
        <div className={s.messagesWrapper}>{messagesElements}</div>
        <div className={s.typeMessage}>
          <textarea
            onChange={onMessageChange}
            placeholder="Enter your message..."
            // ref={newMessageElement}
            value={props.dialogsPage.newMessageText}
          />
          <button onClick={onSendMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
