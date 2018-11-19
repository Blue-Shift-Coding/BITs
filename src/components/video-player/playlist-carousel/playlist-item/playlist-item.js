import React, { useContext } from "react";
import { YOUTUBE } from "../../../../constants";
import { VideoPlayerContext } from "../../video-player-context";
import "./playlist-item.scss";

export const PlaylistItem = ({ id }) => {
  const { dispatch } = useContext(VideoPlayerContext);
  console.log({ id });
  const openVideo = () => dispatch({ type: YOUTUBE, videoId: id });
  return (
    <img
      src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
      width="100px"
      height="50px"
      onClick={openVideo}
      className="playlist-item"
    />
  );
};
