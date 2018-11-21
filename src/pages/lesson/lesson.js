import React from "react";
import { Scratch } from "../../components/scratch/scratch";
import { VideoPlayer } from "../../components/video-player/video-player";
import queryString from "query-string";

export const Lesson = ({ location }) => {
  const search = queryString.parse(location.search);
  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <Scratch />
      <VideoPlayer id={search.videoId} />
    </div>
  );
};
