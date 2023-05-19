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

function App({dialogs, messages, posts}) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header img={logo} />
        <Navbar />
        <div className="app-content-wrapper">
          <Routes>
            <Route path="/profile" element={<Profile posts={posts} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogs={dialogs} messages={messages} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
