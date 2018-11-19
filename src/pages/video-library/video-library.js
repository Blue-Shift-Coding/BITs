import React from "react";

import { VideoItem } from "./video-item/video-item";
import "./video-library.scss";

export const playlist = [
  { id: "Js83Fgzy35E", title: "Title 1" },
  { id: "8nsZYh3IBRQ", title: "Title 2" },
  { id: "1wTPV0c_Xv4", title: "Title 3" }
];
export const VideoLibrary = () => {
  return (
    <div className="video-library">
      <h1 className="title">Video library</h1>
      <div className="video-items">
        {playlist.map(track => (
          <VideoItem title={track.title} id={track.id} />
        ))}
      </div>
    </div>
  );
};
