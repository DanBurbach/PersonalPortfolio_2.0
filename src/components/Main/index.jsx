import React, { Component } from 'react';

import Intro from '../Intro';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import Clouds from "./../Skills/Clouds";
import Balloon from './../Skills/Balloon';
import Timeline from '../About/Timeline';


import "./../../assets/Main.css";
import "./../../assets/Timeline.css"



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

openNav() {
  document.getElementById("myNav").style.width = "100%";
}

closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

handleMainNav = (event) => {
  event.preventDefault();
  document.getElementById("intro").scrollIntoView({ behavior: 'smooth', block: 'center' });
  this.closeNav();
}

handleAboutNav = (event) => {
  event.preventDefault();
  document.getElementById("about").scrollIntoView({ behavior: 'smooth', block: 'center' });
  this.closeNav();
}

handleSkillsNav = (event) => {
  event.preventDefault();
  document.getElementById("skills").scrollIntoView({ behavior: 'smooth', block: 'center' });
  this.closeNav();
}

handleProjectsNav = (event) => {
  event.preventDefault();
  document.getElementById("projects").scrollIntoView({ behavior: 'smooth', block: 'start' });
  this.closeNav();
}

handleContactNav = (event) => {
  event.preventDefault();
  document.getElementById("contact").scrollIntoView({ behavior: 'smooth', block: 'center' });
  this.closeNav();
}

  render() {
      return (
        <div>
          
          <div className="main_container">
            <div className="navMenuBackground">
              <div className="navMenu">
                <div onClick={this.openNav}>Menu</div>
              </div>
            </div>
            <div id="myNav" className="overlay">
              <div className="closebtn" onClick={this.closeNav}>
                &times;
              </div>
              <div className="overlay-content">
                <ul>
                  <ol onClick={this.handleMainNav}>Main</ol>
                  <ol onClick={this.handleAboutNav}>About</ol>
                  <ol onClick={this.handleSkillsNav}>Skills</ol>
                  <ol onClick={this.handleProjectsNav}>Projects</ol>
                  <ol onClick={this.handleContactNav}>Contact</ol>
                </ul>
              </div>
            </div>

            <div className="main_group_wrapper">

              <div className="main_section">
                <div id="intro">
                  <div className="intro">
                    <Intro />
                  </div>
                </div>
              </div>

              {/* <div id="content-spacing" /> */}

              <div className="main_section">
                <div id="about">
                  <div className="about group">
                    <div className="col about_grid_left">
                      <About />
                    </div>
                    <div className="col about_grid_right" id="timeline">
                      <Timeline />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div id="content-spacing" /> */}

              <div className="main_section">
                <div id="skills">
                  <div className="skills">
                    <div id="skill_list">
                      <Skills />
                    </div>
                    <div id="balloons">
                      <Balloon/>
                    </div>
                    <div id="clouds">
                      <Clouds />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div id="content-spacing" /> */}

              <div className="main_section">
                <div id="projects">
                  <div className="projects">
                    <Projects />
                  </div>
                </div>
              </div>

              {/* <div id="content-spacing" /> */}

              <div className="main_section">
                <div id="contact">
                  <div className="contact">
                    <Contact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default Main;