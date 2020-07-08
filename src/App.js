import React from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import AppState from "./context/youtube/appState";
import "./App.css";

const App = () => {
  return (
    <AppState>
      <div className="container">
        <div justify="center" container spacing={10}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <div>
            <div className="video-container">
              <div className="video-details">
                <VideoDetails />
              </div>
              <div className="video-items">
                <VideoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppState>
  );
};

export default App;
