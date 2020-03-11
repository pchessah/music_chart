import React from "react";

function Video() {
  return (
    <div>
    Davido Playlist
      <iframe
      title="Davido playlist"
        width="300"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLwFbjnXlATSVeZUrw4DkvRnenXNBPx_Th"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
