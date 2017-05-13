import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import SimpleWebRTC from 'simplewebrtc';

class WebRtcDemo extends Component {
  state = {
    text: ""
  };
  
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
  
  onChange = (e) => {
    this.setState({text: e.target.value});
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
    this.webrtc.joinRoom(this.state.text);
    this.setState({text: ""});
  };
  
  handleLeave = () => {
    this.webrtc.leaveRoom();
    this.webrtc.stopLocalVideo();
  };

  render() {
      return (
          <div>
            <div>
              <input className="input_field" onChange={ this.onChange } value={ this.state.text } />
              <Button className="vidButton" onClick={this.handleJoin} bsStyle="success">Join Room</Button>
              <Button className="vidButton" onClick={this.handleLeave} bsStyle="danger">Leave Room</Button>
            </div>
            <Col md={6} className="vidContainer">
              <div>
                <video id="localVideo"></video>
              </div>
              <div>
                <Button className="vidButton" onClick={this.handleStart} bsStyle="success">Start</Button>
                <Button className="vidButton" onClick={this.handleResume} bsStyle="primary">Resume</Button>
                <Button className="vidButton" onClick={this.handlePause} bsStyle="warning">Pause</Button>
                <Button className="vidButton" onClick={this.handleStop} bsStyle="danger">Stop</Button>
              </div>
            </Col>
            <Col md={6}>
              <div id="remoteVideos"></div>
            </Col>
          </div>
      );
  };
}
export default WebRtcDemo;