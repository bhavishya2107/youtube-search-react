import { GET_VIDEOS, SELECTED_VIDEO, SELECT_SINGLE_VIDEO } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    case SELECTED_VIDEO:
      return {
        ...state,
        selectedVideo: action.payload,
      };
    case SELECT_SINGLE_VIDEO:
      return {
        ...state,
        selectedVideo: action.payload,
      };
    default:
      return state;
  }
};
