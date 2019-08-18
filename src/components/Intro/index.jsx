import React, { Component } from 'react';

import Welcome from './Welcome';
import DownArrow from './DownArrow';
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
        <DownArrow/>
      </div>
    );
  }
}
export default Intro;
