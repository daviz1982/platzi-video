import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer.js';
// import Controls from '../components/video-player-controls.js';
// import ProgressBar from '../components/progress-bar';
// import Spinner from '../components/spinner';
// import Volume from '../components/volume';
// import FullScreen from '../components/full-screen';


class VideoPlayer extends Component {
  // Set initial state
  state = {
    pause: true,
    duration: 0,
  };

  // Function to control play/pause
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause,
    });
  };

  // Function to assign play or pause state to video on component mount
  componentDidMount = () => {
    this.setState({
      pause: (!this.props.autoplay),
    });
  };

  // Function to extract metadata from the video itself
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  };

  render = () => {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un pinche video"
        />
        <PlayPause
          pause={this.props.autoplay}
          handleClick={this.togglePlay}
        />
        <Timer 
          duration={this.state.duration}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          onLoadedMetadata={this.handleLoadedMetadata}
          src=""
        />
      </VideoPlayerLayout>
    );
  };
}

export default VideoPlayer;