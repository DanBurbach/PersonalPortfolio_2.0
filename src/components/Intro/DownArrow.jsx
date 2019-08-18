import React, { Component } from "react";
import "./../../assets/DownArrow.css";

class DownArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="downarrow_container">
        <div>
          <i className="arrow down" />
        </div>
      </div>
    );
  }
}
export default DownArrow;
