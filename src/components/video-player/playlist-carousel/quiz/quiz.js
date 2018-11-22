import React, { useContext } from "react";
import { VideoPlayerContext } from "../../video-player-context";
import { QUIZ } from "../../../../constants";
import { BlueshiftTooltip } from "../../../blueshift-tooltip/blueshift-tooltip";
import "./quiz.scss";

export const Quiz = () => {
  const { state, dispatch } = useContext(VideoPlayerContext);
  const openQuiz = () => {
    dispatch({ type: QUIZ });
  };
  return (
    <BlueshiftTooltip title="Quiz +100 points">
      <img
        src="/quiz-page.jpg"
        height="55px"
        width="105px"
        onClick={openQuiz}
        className="quiz"
      />
    </BlueshiftTooltip>
  );
};
