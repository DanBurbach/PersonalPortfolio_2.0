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
      <div className='container_intro'>
        <div className='parallax'>
        <div className='parallax_container'>
          <div className='parallax_layer p1'/>
          <div className='parallax_container'></div>
          <div className='parallax_layer p2'/>
          <div className='parallax_container'></div>
          <div className='parallax_layer p3'/>
          <div className='parallax_container'></div>
          <div className='parallax_layer p4'>
            <Welcome />
          </div>
          <div className='parallax_layer p5'/>
            <div id='intro_content' />
        </div>
        </div>
      </div>
    );
  }
}
export default Intro;
