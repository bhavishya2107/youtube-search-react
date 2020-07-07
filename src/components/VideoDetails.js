import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const VideoDetails = ({ video }) => {
  if (!video)
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={8}>
              <Skeleton height={450} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="rect" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevatiom={0}>
        <iframe
          frameBorder="0"
          height="450px"
          width="100%"
          title="Video player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevatiom={6} style={{ padding: "15px" }}>
        <Typography variant="h5">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          Channel: {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          Description: {video.snippet.description}
        </Typography>
      </Paper>
    </>
  );
};

export default VideoDetails;
