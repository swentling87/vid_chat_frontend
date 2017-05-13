import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SimpleWebRTC from 'simplewebrtc';

class WebRtcDemo extends Component {
  
  componentWillMount = () => {
    this.webrtc = new SimpleWebRTC({
      // the id/element dom element that will hold "our" video
      localVideoEl: 'localVideo',
      // the id/element dom element that will hold remote videos
      remoteVideosEl: 'remoteVideos',
      // immediately ask for camera access
      autoRequestMedia: true
    });
  };
  
  handlePause = () => {
    this.webrtc.pause();
  };
  
  handleResume = () => {
    this.webrtc.resume();
  };
  
  handleStop = () => {
    this.webrtc.stopLocalVideo();
  };
  
  handleStart = () => {
    this.webrtc.startLocalVideo();
  };
  
  handleJoin = () => {
    this.webrtc.joinRoom('test-room');
  };

  render() {
      return (
          <div>
            <div>
              <Button onClick={this.handleJoin} bsStyle="success">Join Room</Button>
            </div>
            <div>
              <Button onClick={this.handleStart} bsStyle="success">Start</Button>
              <Button onClick={this.handleResume} bsStyle="primary">Resume</Button>
              <Button onClick={this.handlePause} bsStyle="warning">Pause</Button>
              <Button onClick={this.handleStop} bsStyle="danger">Stop</Button>
              <video id="localVideo"></video>
              <div id="remoteVideos"></div>
            </div>
          </div>
      );
  };
}
export default WebRtcDemo;