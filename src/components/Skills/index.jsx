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
            <ul>
              <li>
                <a href>
                  <img
                    src={require("./../../assets/experience_icons/exp_ReactJSIcon.png")}
                    alt="React"
                    width="80vw"
                  />
                </a>
              </li>
              <li>
                <a href>
                  <img
                    src={require("./../../assets/experience_icons/exp_ReduxIcon.png")}
                    alt="Redux"
                    width="60vw"
                  />
                </a>
              </li>
              <li>
                <a href>
                  <img
                    src={require("./../../assets/experience_icons/exp_HTML5Icon.png")}
                    alt="HTML5"
                    width="80vw"
                  />
                </a>
              </li>
              <li>
                <a href>
                  <img
                    src={require("./../../assets/experience_icons/exp_JSIcon.png")}
                    alt="Javascript"
                    width="60vw"
                  />
                </a>
              </li>
              <li>
                <a href>
                  <img
                    src={require("./../../assets/experience_icons/exp_CSS3Icon.png")}
                    alt="CSS3"
                    width="55vw"
                  />
                </a>
              </li>
              <li>
                <a href>
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
            <ul>
              <li>
                <a href>
                  <img
                    src={require("./../../assets/experience_icons/exp_RubyIcon.png")}
                    alt="Ruby"
                    width="70vw"
                  />
                </a>
              </li>
              <li>
                <a href>
                  <img
                    src={require("./../../assets/experience_icons/exp_RailsIcon.png")}
                    alt="Rails"
                    width="70vw"
                  />
                </a>
              </li>
              <li>
                <a href>
                  <img
                    src={require("./../../assets/experience_icons/exp_GoogleFirebaseIcon.png")}
                    alt="Google Firebase"
                    width="70vw"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h3>Storage/Hosting</h3>
          <ul>
            <li>
              <a href>
                <img
                  src={require("./../../assets/experience_icons/exp_GitIcon.png")}
                  alt="Git"
                  width="120vw"
                />
              </a>
            </li>
              <li>
                <a href>
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
          <ul>
            <li>
              <a href>
                <img
                  src={require("./../../assets/experience_icons/exp_VSCodeIcon.png")}
                  alt="Visual Studio Code"
                  width="60vw"
                />
              </a>
            </li>
            <li>      
              <a href>
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
