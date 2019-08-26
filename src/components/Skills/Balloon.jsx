import React, { Component } from "react";

import "./../../assets/Balloons.css";

class Balloon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <figure className="balloon">
        <div className="envelope">
          <span />
          <span />
        </div>
        <div className="basket">
          <span />
          <span />
          <span />
          <span />
        </div>
      </figure>
    );
  }
}
export default Balloon;
