import React, { Component } from 'react';

import Intro from '../Intro';
import About from '../About';
import Projects from '../Projects';
import Interests from '../Interests';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    
  }

  render() {
      return (
        <div>
          <div className="main_container">
            <div className="main_group_wrapper">
              <div className="main_first">
                <div id="intro">
                  <Intro/>
                </div>
              </div>
              <div className="main_second">
                <div id="about">
                  <About/>
                </div>
              </div>
              <div className="main_third">
                <div id="projects">
                  <Projects/>
                </div>
              </div>
              <div className="main_fourth">
                <div id="interests">
                  <Interests/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default Main;