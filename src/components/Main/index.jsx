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

openNav() {
  let nav = document.getElementById("myNav");
  nav.style.height = "100%";
}

closeNav() {
  let nav = document.getElementById("myNav");
  nav.style.height = "0%";
}

  render() {
      return (
        <div>
          <div className="main_container">
            <div id="myNav" className="overlay">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={this.closeNav}
              >
                &times;
              </a>
              <div className="overlay-content">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <span style={{fontSize:"30px",cursor:"pointer"}}
              onClick={this.openNav}
            >
              Menu
            </span>

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