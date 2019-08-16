import React, { Component } from "react";
import "./../../assets/Intro.css";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="intro_container">
        <h1>Welcome</h1>
        <h1 id="shadow">Welcome</h1>
      </div>
    );
  }
}
export default Intro;
