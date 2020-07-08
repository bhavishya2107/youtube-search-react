import {
  GET_VIDEOS,
  SELECTED_VIDEO,
  SET_LOADING,
  SELECT_SINGLE_VIDEO,
} from "./types";
export default (state, action) => {
  {
    switch (action.type) {
      case GET_VIDEOS:
        return {
          ...state,
          videos: action.payload,
          loading: false,
        };
      case SELECTED_VIDEO:
        return {
          ...state,
          selectedVideo: action.payload,
          loading: false,
        };
      case SELECT_SINGLE_VIDEO:
        return {
          ...state,
          selectedVideo: action.payload,
          loading: false,
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  }
};
