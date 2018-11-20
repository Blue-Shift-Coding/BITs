import React from "react";
import { slide as Menu } from "react-burger-menu";
import { ReactComponent as Direction } from "../../icons/direction.svg";
import "./burger-menu.scss";
const SIZE_ICON = "36px";

export const BurgerMenu = () => {
  const defaultSize = { width: SIZE_ICON, height: SIZE_ICON };
  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      right
      width="280px"
    >
      <p>
        <Direction {...defaultSize} /> <span>Home</span>
      </p>
      <p>
        <Direction {...defaultSize} /> <span>About</span>
      </p>
      <p>
        <Direction {...defaultSize} /> <span>Contacts</span>
      </p>
      <p>
        <Direction {...defaultSize} /> <span>Profile settings</span>
      </p>
    </Menu>
  );
};
