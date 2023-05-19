import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Herman'},
  {id: 2, name: 'Joe'},
  {id: 3, name: 'Love'},
  {id: 4, name: 'Anna'},
  {id: 5, name: 'Maria'},
  {id: 6, name: 'Alex'},
];

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How was your day?'},
  {id: 3, message: 'Nice, and you?'},
  {id: 4, message: 'Good, thanks'},
  {id: 5, message: 'Plan for weekend?'},
  {id: 6, message: 'No'},
];

let posts = [
  {id: 1, message: 'Hi, how are you?', likes: 15},
  {id: 2, message: "It's my first post", likes: 55},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
