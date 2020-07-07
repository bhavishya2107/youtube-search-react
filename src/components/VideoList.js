import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";

const VideoList = ({ videos, singleVideoSelect }) => {
  const listVideos = videos.map((video, id) => (
    <VideoItem key={id} video={video} singleVideoSelect={singleVideoSelect} />
  ));
  return (
    <Grid container spacing={1}>
      {listVideos}
    </Grid>
  );
};
export default VideoList;
