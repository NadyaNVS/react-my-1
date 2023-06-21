import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import logo from "./logo.svg";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header img={logo} />
        <Navbar state={props.state.friendsSide} />
        <div className="app-content-wrapper">
          <Routes>
            <Route path="/profile" element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} />} />
            <Route path="/dialogs/*" element={<Dialogs
              dialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
