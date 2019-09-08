import React, { Component } from 'react';

import Intro from '../Intro';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import Clouds from "./../Skills/Clouds";
import Balloon from './../Skills/Balloon';
import Timeline from '../About/Timeline';
// import Icons from "./../Contact/Icons.jsx";
// import Navigation from "./../Contact/Navigation.jsx";

import TermsAndConditions from './../../assets/TermsAndConditions.jsx';

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
                      <Balloon />
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
                              <a onClick={this.handleMainNav}>Main</a>
                            </li>
                            <li>
                              {" "}
                              <a onClick={this.handleAboutNav}>About</a>
                            </li>
                            <li>
                              {" "}
                              <a onClick={this.handleSkillsNav}>Skill</a>s
                            </li>
                            <li>
                              {" "}
                              <a onClick={this.handleProjectsNav}>Projects</a>
                            </li>
                            <li>
                              {" "}
                              <a onClick={this.handleContactNav}>Contact</a>
                            </li>
                          </ul>
                        </div>

                        <div className="col">
                          <h1>Resources</h1>
                          <ul>
                            <li><a href="#Contact_Me">
                            Contact Me
                            </a>
                            </li>
                              <div className="modal_contact" id="Contact_Me" aria-hidden="true">
                                <div className="modal_contact-dialog">
                                  <div className="modal_contact-header">
                                    <h1>Contact Me</h1>
                                    <a href="/" className="btn_terms-close" aria-hidden="true">
                                      x
                                    </a>
                                  </div>
                                <div className="modal_contact-body">
                                  <Contact />
                                </div>
                                <div className="modal_contact-footer">
                                  <a href="/" className="btn_terms_bottom">
                                    Close
                                  </a>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </div>

                        <div className="col social">
                          <h1>Social</h1>
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/danielburbach/">
                                <img
                                  src={require("./../../assets/icons/linkedin.jpg")}
                                  alt="LinkedIn"
                                  width="80px"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://github.com/DanBurbach">
                                <img
                                  src={require("./../../assets/icons/githubIcon.png")}
                                  alt="GitHub"
                                  width="90px"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/dannodemo/">
                                <img
                                  src={require("./../../assets/icons/pinterestIcon.svg")}
                                  alt="Pintrest"
                                  width="70px"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/DannoDemo">
                                <img
                                  src={require("./../../assets/icons/twitterIcon.svg")}
                                  alt="Twitter"
                                  width="70px"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="bottom-bar">
                        All Rights Reserved © 2019{" "}
                        <a href="#Terms_and_Conditions" className="btn_terms">
                          Terms and Conditions
                        </a>
                      </div>
                      <div className="modal" id="Terms_and_Conditions" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-header">
                            <a href="/" className="btn_terms-close" aria-hidden="true">
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