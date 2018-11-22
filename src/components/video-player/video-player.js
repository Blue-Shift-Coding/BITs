import React, { useReducer, createContext, useState } from "react";
import { Link } from "react-router-dom";
import { PlaylistCarousel } from "./playlist-carousel/playlist-carousel";
import { YoutubePlayer } from "./yuotube-player/youtube-player";
// import Draggable from "react-draggable";
import { Rnd } from "react-rnd";

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
  const headerHeight = 70;
  const initWidthPlayer = 510;
  const initHeightPlayer = 390;
  const halfY = window.innerHeight / 2;
  const halfX = window.innerWidth / 2;
  const [x, setX] = useState(halfX - initWidthPlayer / 2);
  const [y, setY] = useState(halfY - headerHeight - initHeightPlayer / 2);
  const [width, setWidth] = useState(initWidthPlayer);
  const [height, setHeight] = useState(initHeightPlayer);
  return (
    <Rnd
      size={{ width, height }}
      position={{ x, y }}
      minHeight={initHeightPlayer}
      minWidth={initWidthPlayer}
      onDragStop={(e, d) => {
        setY(d.y);
        setX(d.x);
      }}
      onResize={(e, direction, ref, delta, position) => {
        setWidth(ref.clientWidth);
        setHeight(ref.clientHeight);
      }}
      className="video-player"
    >
      <VideoPlayerContext.Provider value={{ state, dispatch }}>
        <Link to="/">
          <HomeIcon />
        </Link>
        {state.playerType === YOUTUBE ? (
          <YoutubePlayer
            id={state.videoId}
            height={height - 100}
            width={width - 10}
          />
        ) : (
          <div>
            <img src="/quiz-page.jpg" height="280px" width="500px" />
          </div>
        )}

        <PlaylistCarousel />
      </VideoPlayerContext.Provider>
    </Rnd>
  );
};
