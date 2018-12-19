import React from 'react'
import "./style.css"

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio ref="audio_tag" src="/audio/ben_theme_1.mp3" controls autoPlay />
      </div>
    );
  }
}

export default AudioPlayer;
