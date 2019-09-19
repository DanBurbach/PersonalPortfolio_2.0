import React, { Component } from 'react';
import ParticlesDisplay from './../../assets/ParticlesDisplay.jsx';

import Intro from '../Intro';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import Clouds from './../Skills/Clouds';
import Balloon from './../Skills/Balloon';
import PersonalPhoto from "../Contact/PersonalPhoto";
import ParallaxWallpaper from '../Projects/Parallax_Wallpaper';

import TermsAndConditions from './../../assets/TermsAndConditions.jsx';

import './../../assets/Main.css';
import "./../../assets/aos.css";
import './../../assets/Timeline.css'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  handleMainNav = event => {
    event.preventDefault();
    document
      .getElementById("intro")
      .scrollIntoView({ behavior: "smooth", block: "center" });
    this.closeNav();
  };

  handleAboutNav = event => {
    event.preventDefault();
    document
      .getElementById("about")
      .scrollIntoView({ behavior: "smooth", block: "center" });
    this.closeNav();
  };

  handleSkillsNav = event => {
    event.preventDefault();
    document
      .getElementById("skills")
      .scrollIntoView({ behavior: "smooth", block: "center" });
    this.closeNav();
  };

  handleProjectsNav = event => {
    event.preventDefault();
    document
      .getElementById("projects")
      .scrollIntoView({ behavior: "smooth", block: "start" });
    this.closeNav();
  };

  handleContactNav = event => {
    event.preventDefault();
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth", block: "center" });
    this.closeNav();
  };

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
                  <div className="particles">
                    <ParticlesDisplay />
                  </div>
                  <Intro />
                </div>
              </div>
            </div>

            <div className="main_section">
              <div id="about">
                <div className="about">
                  <About />
                </div>
              </div>
            </div>

            <div className="main_section">
              <div id="skills">
                <div className="skills">
                  <div id="skill_list">
                    <Skills />
                  </div>
                  <div id="balloons">
                    <Balloon />
                  </div>
                  <div id="clouds">
                    <Clouds />
                  </div>
                </div>
              </div>
            </div>

            <div className="main_section">
              <div id="projects">
                <div className="projects">
                  <Projects />
                </div>
              </div>
            </div>

            <div className="parallax">
              <ParallaxWallpaper />
            </div>

            <div className="main_section">
              <div id="contact">
                <div className="contact">
                  <div className="footer">
                    <div className="contain">
                      <div className="col">
                        <h1>Navigation</h1>
                        <ul>
                          <li>
                            {" "}
                            <div onClick={this.handleMainNav}>Main</div>
                          </li>
                          <li>
                            {" "}
                            <div onClick={this.handleAboutNav}>About</div>
                          </li>
                          <li>
                            {" "}
                            <div onClick={this.handleSkillsNav}>Skills</div>
                          </li>
                          <li>
                            {" "}
                            <div onClick={this.handleProjectsNav}>Projects</div>
                          </li>
                          <li>
                            {" "}
                            <div onClick={this.handleContactNav}>Contact</div>
                          </li>
                        </ul>
                      </div>

                      <div className="col">
                        <h1>Resources</h1>
                        <ul>
                          <li>
                            <a href="#openModal_contact">Contact Me</a>
                          </li>
                        </ul>
                      </div>

                      <div
                        id="openModal_contact"
                        className="modalDialog_contact"
                      >
                        <div>
                          <a
                            href="#close_contact"
                            title="Close_Contact"
                            className="close_contact"
                          >
                            x
                          </a>
                          <div>
                            <Contact />
                          </div>
                        </div>
                      </div>

                      <div className="col social">
                        <h1>Social</h1>
                        <ul className="social_buttons" id="socialbuttons">
                          <li>
                            <a href="https://www.linkedin.com/in/danielburbach/">
                              <img
                                src={require("./../../assets/icons/linkedin_icon.svg")}
                                alt="LinkedIn"
                                width="90px"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/DanBurbach">
                              <img
                                src={require("./../../assets/icons/github_icon.svg")}
                                alt="GitHub"
                                width="90px"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/dannodemo/">
                              <img
                                src={require("./../../assets/icons/pinterest_icon.svg")}
                                alt="Pintrest"
                                width="90px"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/DannoDemo">
                              <img
                                src={require("./../../assets/icons/twitter_icon.svg")}
                                alt="Twitter"
                                width="90px"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="col social">
                        {/* <ul>
                          <li> */}
                            <PersonalPhoto />
                          {/* </li>
                        </ul> */}
                      </div>

                      <div className="clearfix"></div>
                    </div>

                    <div className="bottom-bar">
                      All Rights Reserved © 2019{" "}
                      <a href="#Terms_and_Conditions" className="btn_terms">
                        Terms and Conditions
                      </a>
                    </div>
                    <div
                      className="modal"
                      id="Terms_and_Conditions"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-header">
                          <a
                            href="/"
                            className="btn_terms-close"
                            aria-hidden="true"
                          >
                            x
                          </a>
                        </div>
                        <div className="modal-body">
                          <TermsAndConditions />
                        </div>
                        <div className="modal-footer">
                          <a href="/" className="btn_terms_bottom">
                            Close
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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