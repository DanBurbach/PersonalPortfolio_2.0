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
        <div>
          <h2>Comfortable with:</h2>
          <div className="graph bar0">HTML5</div>
          <div className="graph bar1">CSS3</div>
          <div className="graph bar2">JavaScript</div>
          <div className="graph bar3">React.js</div>
          <div className="graph bar4">Photoshop/Illustrator</div>
          <div className="graph bar5">Bootstrap</div>
          <div className="graph bar6">Agile Methods and Project Practices</div>
        </div>
        <div className="skill_icons_main">
          <h2>Experience with:</h2>
          <div className="col">
            <h3>Front-End</h3>
            <ul id="skillIcons">
              <li>
                <a href="https://reactjs.org">
                  <p>React</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_ReactJSIcon.png")}
                    alt="React"
                    width="80vw"
                  />
                </a>
              </li>
              <li>
                <a href="https://redux.js.org">
                  <p>Redux</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_ReduxIcon.png")}
                    alt="Redux"
                    width="60vw"
                  />
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
                  <p>HTML5</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_HTML5Icon.png")}
                    alt="HTML5"
                    width="80vw"
                  />
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <p>Javascript</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_JSIcon.png")}
                    alt="Javascript"
                    width="60vw"
                  />
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  <p>CSS3</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_CSS3Icon.png")}
                    alt="CSS3"
                    width="55vw"
                  />
                </a>
              </li>
              <li>
                <a href="https://angular.io">
                  <p>Angular</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_AngularIcon.svg")}
                    alt="Angular"
                    width="70vw"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h3>Back-End</h3>
            <ul id="skillIcons">
              <li>
                <a href="https://www.ruby-lang.org/en/">
                  <p>Ruby</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_RubyIcon.png")}
                    alt="Ruby"
                    width="70vw"
                  />
                </a>
              </li>
              <li>
                <a href="https://rubyonrails.org">
                  <p>Rails</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_RailsIcon.png")}
                    alt="Rails"
                    width="70vw"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h3>Storage/Hosting/Core</h3>
            <ul id="skillIcons">
              <li>
                <a href="https://github.com">
                  <p>GitHub</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_GitHubIcon.png")}
                    alt="GitHub"
                    width="70vw"
                  />
                </a>
              </li>
              <li>
                <a href="https://git-scm.com">
                  <p>Git</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_GitIcon.png")}
                    alt="Git"
                    width="120vw"
                  />
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com">
                  <p>Google Firebase</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_GoogleFirebaseIcon.png")}
                    alt="Google Firebase"
                    width="70vw"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.heroku.com">
                  <p>Heroku</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_HerokuIcon.png")}
                    alt="Heroku"
                    width="70vw"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h3>Code Editing</h3>
            <ul id="skillIcons">
              <li>
                <a href="https://code.visualstudio.com">
                  <p>VS Code</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_VSCodeIcon.png")}
                    alt="Visual Studio Code"
                    width="60vw"
                  />
                </a>
              </li>
              <li>
                <a href="https://atom.io">
                  <p>Atom</p>
                  <img
                    src={require("./../../assets/experience_icons/exp_AtomIcon.png")}
                    alt="Atom"
                    width="70vw"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
