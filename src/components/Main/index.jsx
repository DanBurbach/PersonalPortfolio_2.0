import React, { Component } from 'react';

import Intro from '../Intro';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
// import Menu from './Menu';

import "./../../assets/Main.css";


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
            
          <div className="menu">
            <h1>-- Menu Opened --</h1>
          </div>

          <button type="button" className="menuBtn">
            <span></span>
          </button>

            <div className="main_group_wrapper">
              <div className="main_first">
                <div id="intro">
                  <Intro />
                </div>
              </div>
              <div className="main_second">
                <div id="about">
                  <About />
                </div>
              </div>
              <div className="main_third">
                <div id="projects">
                  <Projects />
                </div>
              </div>
              <div className="main_fourth">
                <div id="interests">
                  <Skills />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default Main;