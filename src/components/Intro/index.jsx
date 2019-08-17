import React, { Component } from 'react';

import Welcome from './Welcome';
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
      </div>
    );
  }
}
export default Intro;
