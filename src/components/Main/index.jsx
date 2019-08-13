import React, { Component } from 'react';

import Intro from '../Intro';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';

import "./../../assets/Main.css";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

openNav() {
  const nav = document.getElementById("myNav");
  nav.style.height = "100%";
}

closeNav() {
  const nav = document.getElementById("myNav");
  nav.style.height = "0%";
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

handleProjectsNav = (event) => {
  event.preventDefault();
  document.getElementById("projects").scrollIntoView({ behavior: 'smooth', block: 'center' });
  this.closeNav();
}

handleSkillsNav = (event) => {
  event.preventDefault();
  document.getElementById("interests").scrollIntoView({ behavior: 'smooth', block: 'center' });
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
            <div className="navMenu">
                <div onClick={this.openNav}>
                  Menu
                </div>
            </div>
          <div className="main_container">
            <div id="myNav" className="overlay">
              <div className="closebtn" onClick={this.closeNav}>
                &times;
              </div>
              <div className="overlay-content">
                <ul>
                  <ol onClick={this.handleMainNav}>Main</ol>
                  <ol onClick={this.handleAboutNav}>About</ol>
                  <ol onClick={this.handleProjectsNav}>Projects</ol>
                  <ol onClick={this.handleSkillsNav}>Skills</ol>
                  <ol onClick={this.handleContactNav}>Contact</ol>
                </ul>
              </div>
            </div>


            <div className="main_group_wrapper">
              <div className="main_section">
                <div id="intro">
                  <Intro />
                </div>
              </div>
              <div className="main_section">
                <div id="about">
                  <About />
                </div>
              </div>
              <div className="main_section">
                <div id="projects">
                  <Projects />
                </div>
              </div>
              <div className="main_section">
                <div id="interests">
                  <Skills />
                </div>
              </div>
              <div className="main_section">
                <div id="contact">
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default Main;