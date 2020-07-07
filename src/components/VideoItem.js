import React from "react";
import { Skeleton } from "@material-ui/lab";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, singleVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => singleVideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px", height: "7rem", width: "10rem" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">{video.snippet.title}</Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
