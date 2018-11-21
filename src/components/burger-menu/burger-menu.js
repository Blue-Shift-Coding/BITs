import React from "react";
import { slide as Menu } from "react-burger-menu";
import { ReactComponent as Rocket } from "../../icons/rocket.svg";
import { ReactComponent as Trophy } from "../../icons/trophy.svg";
import { ReactComponent as User } from "../../icons/user.svg";
import { ReactComponent as Video } from "../../icons/video.svg";
import hamburger from "../../icons/hamburger.svg";

import "./burger-menu.scss";
const SIZE_ICON = "28px";

export const BurgerMenu = () => {
  const defaultSize = { width: SIZE_ICON, height: SIZE_ICON };
  return (
    <Menu
      customBurgerIcon={<img src={hamburger} />}
      customCrossIcon={<img src={hamburger} />}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      right
      width="280px"
    >
      <div>
        <Rocket {...defaultSize} /> <span>My stuff</span>
        <div className="sub-menu">+13,521 points</div>
        <div className="sub-menu">My challanges</div>
      </div>
      <div>
        <Trophy {...defaultSize} /> <span>My achievements</span>
      </div>
      <div>
        <Video {...defaultSize} /> <span>My video lessons</span>
      </div>
      <div>
        <User {...defaultSize} /> <span>My profile</span>
        <div className="sub-menu">logout</div>
      </div>
    </Menu>
  );
};
