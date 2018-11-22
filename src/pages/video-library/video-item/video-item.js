import React from "react";
import { Link } from "react-router-dom";

import "./video-item.scss";

export const VideoItem = ({ id, title, level, watched }) => {
  console.log({ watched });
  return (
    <div className="video-item">
      <Link to={{ pathname: "/lesson", search: `videoId=${id}` }}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt=""
          width="250px"
          height="150px"
        />
        <div className="info">
          <h3 className="title">{title}</h3>
          <div className="sub-info">
            <p>{`Level ${level}`}</p>
            {watched ? <p className="watched">Watched</p> : null}
          </div>
        </div>
      </Link>
    </div>
  );
};
