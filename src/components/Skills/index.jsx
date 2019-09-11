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
          <ul>
            <li>
              React.js |{" "}
              <a href>
                <img
                  src={require("./../../assets/experience_icons/exp_ReactJSIcon.png")}
                  alt="React"
                  width="80vw"
                />
              </a>
            </li>
            <li>
              Redux |{" "}
              <a href>
                <img
                  src={require("./../../assets/experience_icons/exp_ReduxIcon.png")}
                  alt="Redux"
                  width="60vw"
                />
              </a>
            </li>
            <li>
              Google Firebase |{" "}
              <a href>
                <img
                  src={require("./../../assets/experience_icons/exp_GoogleFirebaseIcon.png")}
                  alt="Google Firebase"
                  width="70vw"
                />
              </a>
            </li>
            <li>
              Heroku |{" "}
              <a href>
                <img
                  src={require("./../../assets/experience_icons/exp_HerokuIcon.png")}
                  alt="Heroku"
                  width="70vw"
                />
              </a>
            </li>
            <li>
              Git |{" "}
              <a href>
                <img
                  src={require("./../../assets/experience_icons/exp_GitIcon.png")}
                  alt="Git"
                  width="160vw"
                />
              </a>
            </li>
            <li>
              Ruby |{" "}
              <a href>
                <img
                  src={require("./../../assets/experience_icons/exp_RubyIcon.png")}
                  alt="Ruby"
                  width="70vw"
                />
              </a>
            </li>
            <li>
              Rails |{" "}
              <a href>
                <img
                  src={require("./../../assets/experience_icons/exp_RailsIcon.png")}
                  alt="Rails"
                  width="70vw"
                />
              </a>
            </li>
            <li>
              Atom |{" "}
              <a href>
                <img
                  src={require("./../../assets/experience_icons/exp_AtomIcon.png")}
                  alt="Atom"
                  width="70vw"
                />
              </a>
            </li>
            <li>
              Visual Studio Code |{" "}
              <a href>
                <img
                  src={require("./../../assets/experience_icons/exp_VSCodeIcon.png")}
                  alt="Visual Studio Code"
                  width="70vw"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Skills;
