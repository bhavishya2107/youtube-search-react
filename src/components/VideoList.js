import React, { useContext } from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";
import AppContext from "../context/youtube/appContext";

const VideoList = () => {
  const appContext = useContext(AppContext);
  const { videos } = appContext;
  const listVideos = videos.map((video, id) => (
    <VideoItem key={id} video={video} />
  ));
  return (
    <Grid container spacing={1}>
      {listVideos}
    </Grid>
  );
};
export default VideoList;
