import React from "react";
import { Link } from "react-router-dom";
import "./header-menu.scss";

export const HeaderMenu = () => (
  <div className="header-menu">
    <div className="logo">
      <Link to="/">blue[shift]</Link>
    </div>
    <div className="block-two">
      <div className="hi">Hi there, Anubis!</div>
      <div className="hamburger">
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
      </div>
    </div>
  </div>
);
