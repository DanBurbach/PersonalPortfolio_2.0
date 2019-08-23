import React, { Component } from "react";
import "./../../assets/WhoIAm.css";

class WhoIAm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="whoiam_container">
          <h3>Front End Developer / Problem Solving Creative Thinker</h3>
          <h3 id="shadow">
            Front End Developer / Problem Solving Creative Thinker
          </h3>
          <br />
        </div>
      </div>
    );
  }
}
export default WhoIAm;
