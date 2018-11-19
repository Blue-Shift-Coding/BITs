import React from "react";
import YouTube from "react-youtube";
import "./youtube-player.scss";

export const YoutubePlayer = ({ id }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      modestbranding: 1,
      enablejsapi: 1,
      showinfo: 0
    }
  };
  return (
    <div>
      <YouTube videoId={id} opts={opts} className="youtube-player" />
    </div>
  );
};
