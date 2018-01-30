import React from 'react';
import './video-player-controls.css';

const Controls = (props) => {
  return (
    <div className="VideoPlayerControls">
      {props.children}
    </div>
  )
}

export default Controls;
