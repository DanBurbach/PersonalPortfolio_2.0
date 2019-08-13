import React, { Component } from "react";
import "./../../assets/Skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='skillsMain'>
        <div>
          Comfortable with:
          <ul>
            <li>HTML / CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Photoshop/Illustrator</li>
            <li>Bootstrap</li>
            <li>Agile Methods and Project Practices</li>
          </ul>
        </div>
        <div>
          Experience with:
          <ul>
            <li>Redux</li>
            <li>Google Firebase</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Skills;
