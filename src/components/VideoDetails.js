import React, { useContext, useEffect } from "react";
import AppContext from "../context/youtube/appContext";
import { Paper, Typography } from "@material-ui/core";
import Spinner from "./Spinner";

const VideoDetails = () => {
  const appContext = useContext(AppContext);
  const { selectedVideo } = appContext;

  useEffect(() => {
    (async () => {
      appContext.handleSearchVideos("javascript");
    })();
    // eslint-disable-next-line
  }, []);

  if (!selectedVideo) return <Spinner />;
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <>
      <Paper elevation={3}>
        <iframe
          frameBorder="0"
          height="450px"
          width="100%"
          title="Video player"
          src={videoSrc}
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        />
      </Paper>
      <Paper elevatiom={6} style={{ padding: "15px" }}>
        <Typography variant="h5">
          {selectedVideo.snippet.title} - {selectedVideo.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          Channel: {selectedVideo.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          Description: {selectedVideo.snippet.description}
        </Typography>
      </Paper>
    </>
  );
};

export default VideoDetails;
