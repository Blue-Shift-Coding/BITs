import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import { HeaderMenu } from "./components/header-menu/header-menu";
import "./App.css";
import { VideoLibrary } from "./pages/video-library/video-library";
import { Lesson } from "./pages/lesson/lesson";
import { BurgerMenu } from "./components/burger-menu/burger-menu";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="outer-conteiner">
          <div className="right">
            <BurgerMenu />
          </div>

          <div id="page-wrap">
            <HeaderMenu />
            <Route path="/" exact component={VideoLibrary} />
            <Route path="/lesson" component={Lesson} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
