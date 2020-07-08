import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import AppState from "./context/youtube/appState";
import "./App.css";

const App = () => {
  // const filterOnlyVideos = (videos) => {
  //   videos.filter((video) => {
  //     let filteredVideos;
  //     filteredVideos = video.id.kind !== "youtube#playlist";
  //     return filteredVideos;
  //   });
  // };
  return (
    <AppState>
      <>
        <div className="container">
          <Grid justify="center" container spacing={10}>
            <Grid item xs={12}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <SearchBar />
                </Grid>
                <Grid item xs={8}>
                  <VideoDetails />
                </Grid>
                <Grid item xs={4}>
                  <VideoList />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    </AppState>
  );
};

export default App;
