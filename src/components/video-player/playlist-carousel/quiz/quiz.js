import React, { useContext } from "react";
import { VideoPlayerContext } from "../../video-player-context";
import { QUIZ } from "../../../../constants";
import "./quiz.scss";

export const Quiz = () => {
  const { state, dispatch } = useContext(VideoPlayerContext);
  const openQuiz = () => {
    dispatch({ type: QUIZ });
  };
  console.log(state, "-!-");
  return (
    <img
      src="/quiz.png"
      height="50px"
      width="100px"
      onClick={openQuiz}
      className="quiz"
    />
  );
};
