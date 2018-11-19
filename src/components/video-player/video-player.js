import React, { useReducer, createContext } from "react";
import { Link } from "react-router-dom";
import { PlaylistCarousel } from "./playlist-carousel/playlist-carousel";
import { YoutubePlayer } from "./yuotube-player/youtube-player";
import Draggable from "react-draggable";

import { YOUTUBE } from "../../constants";
import { videoPlayerType } from "../../reducers/video-player";
import { HomeIcon } from "../../icons/home-icon";
import "./video-player.scss";
import { VideoPlayerContext } from "./video-player-context";

export const VideoPlayer = ({ id }) => {
  const [state, dispatch] = useReducer(videoPlayerType, {
    playerType: YOUTUBE,
    videoId: id
  });
  return (
    <VideoPlayerContext.Provider value={{ state, dispatch }}>
      <Draggable defaultPosition={{ x: 50, y: 50 }}>
        <div className="video-player">
          <Link to="/">
            <HomeIcon />
          </Link>
          {state.playerType === YOUTUBE ? (
            <YoutubePlayer id={state.videoId} />
          ) : (
            <div>
              <img src="/quiz-page.jpg" height="280px" width="500px" />
            </div>
          )}

          <PlaylistCarousel />
        </div>
      </Draggable>
    </VideoPlayerContext.Provider>
  );
};
