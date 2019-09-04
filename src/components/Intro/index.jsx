import React, { Component } from 'react';

import ParticlesDisplay from "./../../assets/ParticlesDisplay.jsx";

import Welcome from './Welcome';
import MyName from './MyName';
import DownArrow from './DownArrow';
import WhoIAm from './WhoIAm'
import './../../assets/Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ParticlesDisplay />
        <Welcome />
        <hr className="firstline" />
        <MyName />
        <WhoIAm />
        <DownArrow />
      </div>
    );
  }
}
export default Intro;
