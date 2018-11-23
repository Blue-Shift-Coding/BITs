import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

import "./video-item.scss";

export const VideoItem = ({ id, title, level, watched, currentPlaylist }) => (
  <Col className="video-item" md={{ size: "3" }}>
    <Link
      to={{
        pathname: "/lesson",
        search: `videoId=${id}&currentPlaylist=${currentPlaylist}`
      }}
    >
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
  </Col>
);
