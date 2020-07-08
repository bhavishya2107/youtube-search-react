import React, { useReducer } from "react";
import YoutubeAPI from "../../components/YoutubeAPI";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {
  GET_VIDEOS,
  SELECTED_VIDEO,
  SELECT_SINGLE_VIDEO,
} from "./types";

const AppState = (props) => {
  const initialState = {
    videos: [],
    selectedVideo: ""
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Get Videos
  const handleSearchVideos = async (searchTerm) => {
    const response = await YoutubeAPI.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyAdcfMWoabkt5jdrCz2DtZE56Vk4BElsKA",
        q: searchTerm,
      },
    });
    let array = response.data.items;
    var filterOnlyVideos = array.filter(function (video) {
      return video.id.kind === "youtube#video";
    });
    dispatch({ type: GET_VIDEOS, payload: filterOnlyVideos });
    dispatch({ type: SELECTED_VIDEO, payload: filterOnlyVideos[0] });
  };

  // Selected Video
  const singleVideoSelect = (video) =>
    dispatch({ type: SELECT_SINGLE_VIDEO, payload: video });

  return (
    <AppContext.Provider
      value={{
        videos: state.videos,
        searchTerm: state.searchTerm,
        selectedVideo: state.selectedVideo,
        loading: state.loading,
        handleSearchVideos,
        singleVideoSelect,
      }}
    >
      {" "}
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
