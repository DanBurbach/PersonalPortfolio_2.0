import React, { Component } from "react";

import Timeline from './Timeline';
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
              <div className="graph bar1">HTML / CSS3</div>
              <div className="graph bar2">JavaScript</div>
              <div className="graph bar3">React.js</div>
              <div className="graph bar4">Photoshop/Illustrator</div>
              <div className="graph bar5">Bootstrap</div>
              <div className="graph bar6">
                Agile Methods and Project Practices
              </div>
          </div>
          <div>
            <h2>Experience with:</h2>
              <div>Redux</div>
              <div>Google Firebase</div>
          </div>
      </div>
    );
  }
}
export default Skills;
