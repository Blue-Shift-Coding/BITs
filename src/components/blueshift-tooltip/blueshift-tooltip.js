import React from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import "./blueshift-tooltip.scss";

export const BlueshiftTooltip = ({ children, title }) => {
  return (
    <Tooltip
      overlayClassName="blueshift-tooltip"
      placement="top"
      trigger={["hover"]}
      overlay={<span>{title}</span>}
    >
      {children}
    </Tooltip>
  );
};

export default Tooltip;
