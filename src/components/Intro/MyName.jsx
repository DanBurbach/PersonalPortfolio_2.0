import React, { Component } from "react";
import "./../../assets/MyName.css";

class MyName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="myname_container">
          <h2>My name is Daniel Burbach</h2>
          <h2 id="shadow">My name is Daniel Burbach</h2>
        </div>
      </div>
    );
  }
}
export default MyName;
