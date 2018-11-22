import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./header-menu.scss";

export const HeaderMenu = () => (
  <div className="header-menu">
    <div className="logo">
      <Link to="/">{"blue{shift}"}</Link>
    </div>
    <div className="block-two">
      <div className="hi">Hi there, Anubis!</div>
    </div>
  </div>
);
