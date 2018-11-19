import React from "react";
import { Link } from "react-router-dom";

import "./video-item.scss";

export const VideoItem = ({ id, title }) => {
  return (
    <div className="video-item">
      <Link to={{ pathname: "/lesson", search: `videoId=${id}` }}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt=""
          width="250px"
          height="150px"
        />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};
