import React, { useContext } from "react";
import { YOUTUBE } from "../../../../constants";
import { VideoPlayerContext } from "../../video-player-context";
import { BlueshiftTooltip } from "../../../blueshift-tooltip/blueshift-tooltip";
import "./playlist-item.scss";

export const PlaylistItem = ({ id, title }) => {
  const { dispatch } = useContext(VideoPlayerContext);
  const openVideo = () => dispatch({ type: YOUTUBE, videoId: id });
  return (
    <BlueshiftTooltip title={title}>
      <img
        src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
        width="100px"
        height="50px"
        onClick={openVideo}
        visible
        defaultVisible={true}
        className="playlist-item"
      />
    </BlueshiftTooltip>
  );
};
