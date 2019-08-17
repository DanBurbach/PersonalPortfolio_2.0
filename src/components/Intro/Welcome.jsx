import React, { Component } from "react";
import "./../../assets/Welcome.css";


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="welcome_container">
          <h1>Welcome</h1>
          <h1 id="shadow">Welcome</h1>
        </div>
      </div>
    );
  }
}
export default Welcome;
