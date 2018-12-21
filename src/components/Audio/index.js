import React from 'react'
import "./style.css"

class AudioPlayer extends React.Component {

componentDidMount() {
  var player = document.getElementById('music'); // id for audio element

  var btnPlayPause = document.getElementById('btnPlayPause');


  


  

  

  // Add a listener for the play and pause events so the buttons state can be updated
 



 

 btnPlayPause.onclick = function playPauseAudio() {

    if (player.src) {
      if (player.paused || player.ended) {
        // Change the button to a pause button
        changeButtonType(btnPlayPause, 'volume_off');
        player.play();
      }
      else {
        // Change the button to a play button
        changeButtonType(btnPlayPause, 'volume_on');
        player.pause();
      }
    }
  }





 



  // Updates a button's title, innerHTML and CSS class
  function changeButtonType(btn, value) {
    btn.title = value;
    btn.innerHTML = value;
    btn.className = value;
  }

  

  
}

  render() {
    return (
      <div className="audio-controller">
        {/* <audio className="audio-player" ref="audio_tag" src={process.env.PUBLIC_URL+"/audio/ben_theme_1.mp3"} autoPlay />
        <i className="material-icons">volume_up</i> */}

        <audio id="music" className="audio-player" ref="audio_tag" src={process.env.PUBLIC_URL + "/audio/ben_theme_1.mp3"} autoPlay />
        <div id="audio_player">
          <button id='btnPlayPause' className='play' title='play'><i className="material-icons volume">volume_up</i></button>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
