import { YOUTUBE, QUIZ } from "../constants";
const initialState = { playerType: YOUTUBE };

export const videoPlayerType = (state = initialState, action) => {
  switch (action.type) {
    case YOUTUBE:
      return {
        playerType: YOUTUBE,
        videoId: action.videoId,
        currentPlaylist: action.playlist
      };
    case QUIZ:
      return { playerType: QUIZ };
    default:
      return state;
  }
};
