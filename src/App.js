import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import logo from "./logo.svg";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header img={logo} />
        <Navbar
        // store={props.store}
        />
        <div className="app-content-wrapper">
          <Routes>
            <Route path="/profile" element={<Profile
            // store={props.store}
            />} />
            <Route path="/dialogs/*" element={<DialogsContainer
            // store={props.store} 
            />} />
            <Route path="/users" element={<UsersContainer />} />
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
