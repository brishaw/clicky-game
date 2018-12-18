import React from "react";
import "./style.css";

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio className="player" ref="audio_tag" src="/audio/Ben-10-theme-songs.mp3" controls />
      </div>
    );
  }
}

export default AudioPlayer;