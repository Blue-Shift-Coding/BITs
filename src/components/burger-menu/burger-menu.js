import React from "react";
import { slide as Menu } from "react-burger-menu";
import { ReactComponent as Rocket } from "../../icons/rocket.svg";
import { ReactComponent as Trophy } from "../../icons/trophy.svg";
import { ReactComponent as User } from "../../icons/user.svg";
import { ReactComponent as Video } from "../../icons/video.svg";
import hamburger from "../../icons/hamburger.svg";

import "./burger-menu.scss";
const SIZE_ICON = "36px";

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
      <p>
        <Rocket {...defaultSize} /> <span>My staff</span>
      </p>
      <p>
        <Trophy {...defaultSize} /> <span>My achievements</span>
      </p>
      <p>
        <Video {...defaultSize} /> <span>My video lessons</span>
      </p>
      <p>
        <User {...defaultSize} /> <span>Profile settings</span>
      </p>
    </Menu>
  );
};
