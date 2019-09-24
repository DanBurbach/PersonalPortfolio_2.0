import React, { Component } from "react";

import "./../../assets/Skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="skillsMain">
        <div className="skill_wrapper">
          <div className="skills_item">
            <div className="graph_wrapper">
              <h2>Comfortable with:</h2>
              <div className="graph bar0">HTML5</div>
              <div className="graph bar1">CSS3</div>
              <div className="graph bar2">JavaScript</div>
              <div className="graph bar3">React.js</div>
              <div className="graph bar4">Photoshop/Illustrator</div>
              <div className="graph bar5">Bootstrap</div>
              <div className="graph bar6">
                Agile Methods and Project Practices
              </div>
            </div>
          </div>

          <div className="skills_item">
          <div className="grid_icon_container">
          <div className="skill_item_icons">
            <h2>Experience with:</h2>
            <div className="skill_icons_main">

              <div className="front_end">
                <h3>Front-End</h3>
                <ul id="skillIcons">
                  <li>
                    <a href="https://reactjs.org">
                      <p>React</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_ReactJSIcon.png")}
                        alt="React"
                        width="70vw"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://redux.js.org">
                      <p>Redux</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_ReduxIcon.png")}
                        alt="Redux"
                        width="50vw"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
                      <p>HTML5</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_HTML5Icon.png")}
                        alt="HTML5"
                        width="65vw"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                      <p>Javascript</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_JSIcon.png")}
                        alt="Javascript"
                        width="48vw"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                      <p>CSS3</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_CSS3Icon.png")}
                        alt="CSS3"
                        width="43vw"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://angular.io">
                      <p>Angular</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_AngularIcon.svg")}
                        alt="Angular"
                        width="55vw"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="back_end">
                <h3>Back-End</h3>
                <ul id="skillIcons">
                  <li>
                    <a href="https://www.ruby-lang.org/en/">
                      <p>Ruby</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_RubyIcon.png")}
                        alt="Ruby"
                        width="55vw"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://rubyonrails.org">
                      <p>Rails</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_RailsIcon.png")}
                        alt="Rails"
                        width="55vw"
                      />
                    </a>
                  </li>
                </ul>
              </div>


              <div className="storage_hosting_core">
                <h3>Storage/Hosting/Core</h3>
                <ul id="skillIcons">
                  <li>
                    <a href="https://github.com">
                      <p>GitHub</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_GitHubIcon.png")}
                        alt="GitHub"
                        width="55vw"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://git-scm.com">
                      <p>Git</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_GitIcon.png")}
                        alt="Git"
                        width="100vw"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://firebase.google.com">
                      <p>Google Firebase</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_GoogleFirebaseIcon.png")}
                        alt="Google Firebase"
                        width="55vw"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.netlify.com">
                      <p>Netlify</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_NetlifyIcon.png")}
                        alt="Netlify"
                        width="100vw"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.heroku.com">
                      <p>Heroku</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_HerokuIcon.png")}
                        alt="Heroku"
                        width="55vw"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="code_editing">
                <h3>Code Editing</h3>
                <ul id="skillIcons">
                  <li>
                    <a href="https://code.visualstudio.com">
                      <p>VS Code</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_VSCodeIcon.png")}
                        alt="Visual Studio Code"
                        width="50vw"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://atom.io">
                      <p>Atom</p>
                      <img
                        src={require("./../../assets/experience_icons/exp_AtomIcon.png")}
                        alt="Atom"
                        width="60vw"
                      />
                    </a>
                  </li>
                </ul>
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
export default Skills;
