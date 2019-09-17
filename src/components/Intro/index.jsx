import React, { Component } from 'react';

import Welcome from './Welcome';
import MyName from './MyName';
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
        <Welcome />
        <hr className="firstline" />
        <MyName />
        <WhoIAm />
      </div>
    );
  }
}
export default Intro;
