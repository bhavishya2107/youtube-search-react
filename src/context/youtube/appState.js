import React, { useReducer } from "react";
import YoutubeAPI from "../../components/YoutubeAPI";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { GET_VIDEOS, SELECTED_VIDEO, SET_LOADING,SELECT_SINGLE_VIDEO } from "./types";

const AppState = (props) => {
  const initialState = {
    videos: [],
    selectedVideo: "",
    loading: false,
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Get Videos
  const handleSearchVideos = async (searchTerm) => {
    setLoading();
    const response = await YoutubeAPI.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAdcfMWoabkt5jdrCz2DtZE56Vk4BElsKA",
        q: searchTerm,
      },
    });
    dispatch({ type: GET_VIDEOS, payload: response.data.items });
    dispatch({ type: SELECTED_VIDEO, payload: response.data.items[0] });
  };

  // Selected Video
  const singleVideoSelect = (video) => dispatch({ type: SELECT_SINGLE_VIDEO, payload:video });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <AppContext.Provider
      value={{
        videos: state.videos,
        searchTerm: state.searchTerm,
        selectedVideo: state.selectedVideo,
        loading:state.loading,
        handleSearchVideos,
        singleVideoSelect
      }}
    >
      {" "}
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
