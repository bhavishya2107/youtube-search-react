import React from "react";
// import Navbar from "./components/Navbar";
import { Grid } from "@material-ui/core";
import YoutubeAPI from "./components/YoutubeAPI";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import "./App.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  // componentDidMount() {
  //   this.handleSubmit("javascript");
  // }

  handleSubmit = async (searchTerm) => {
    const response = await YoutubeAPI.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.API_key,
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  filterOnlyVideos = (videos) => {
    videos.filter((video) => {
      let filteredVideos;
      filteredVideos = video.id.kind !== "youtube#playlist";
      return filteredVideos;
    });
  };

  onSingleVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    console.log(videos, "videos here");
    return (
      <>
        <div className="container">
          <Grid justify="center" container spacing={10}>
            <Grid item xs={12}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <SearchBar handleSubmit={this.handleSubmit} />
                </Grid>
                <Grid item xs={8}>
                  <VideoDetails video={selectedVideo} videos={videos} />
                </Grid>
                <Grid item xs={4}>
                  <VideoList
                    videos={videos}
                    singleVideoSelect={this.onSingleVideoSelect}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default App;
