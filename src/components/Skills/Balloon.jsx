import React, { Component } from "react";

import "./../../assets/Balloons.css";

class Balloon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
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
        
        <figure className="balloon_2">
          <div className="envelope_2">
            <span />
            <span />
          </div>
          <div className="basket_2">
            <span />
            <span />
            <span />
            <span />
          </div>
        </figure>

        <figure className="balloon_3">
  `        <div className="envelope_3">
            <span />
            <span />
          </div>
          <div className="basket_3">
            <span />
            <span />
            <span />
            <span />
          </div>`
        </figure>
      </div>
    );
  }
}
export default Balloon;
