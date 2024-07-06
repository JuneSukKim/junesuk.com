import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Header/Navbar";
import Footer from "./component/Header/Footer";
import logo from './logo.svg';
import './App.css';

import Main from "./component/main/main.js";
import Diary from "./component/diary/diary";
import Memo from "./component/memo/memo";
import MY from "./component/My/myPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="mobile">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/mypage" element={<MY />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
