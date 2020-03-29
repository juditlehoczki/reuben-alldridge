import React from "react";

import Navbar from "./components/Navbar";

import "./App.css";
import Introduction from "./components/Introduction";
import ProfilePhoto from "./components/ProfilePhoto";
import About from "./components/About";

import S from "./components/StyledComponents";

function App() {
  return (
    <div className="App">
      <Navbar />
      <S.Container>
        <Introduction />
        <ProfilePhoto />
        <S.TromboneImage />
        <About />
        <S.JL>
          <a href="http://juditlehoczki.me" target="blank_">
            JL
          </a>
        </S.JL>
      </S.Container>
    </div>
  );
}

export default App;
