import React from "react";
import Tooltip from "rc-tooltip";

import { VideoItem } from "./video-item/video-item";
import "./video-library.scss";

export const playlist = [
  { id: "1wTPV0c_Xv4", title: "How to Make a Rainbow Pen in Scratch 3" },
  {
    id: "Js83Fgzy35E",
    title: "How to Make a Rainbow Pen in Scratch 3 - Part Two"
  },
  { id: "1wTPV0c_Xv4", title: "How to Make a Rainbow Pen in Scratch 3" },
  {
    id: "8nsZYh3IBRQ",
    title: "How to Make a Rainbow Pen in Scratch 3 - Part Three"
  },
  { id: "1wTPV0c_Xv4", title: "How to Make a Rainbow Pen in Scratch 3" }
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
