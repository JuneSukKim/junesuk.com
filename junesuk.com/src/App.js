import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Header/Navbar";
import Footer from "./component/Header/Footer";
import logo from './logo.svg';
import './App.css';

import Main from "./component/main/main.js";
import Diary from "./component/diary/diary";
import Diarywrite from "./component/diary/diarywrite";
import Memo from "./component/memo/memo";
import Memowrite from "./component/memo/memowrite";
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
            <Route path="/memowrite" element={<Memowrite />} />
            <Route path="/diarywrite" element={<Diarywrite />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
