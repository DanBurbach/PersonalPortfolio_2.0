import React, { Component } from "react";

import "./../../assets/Timeline.css";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="timeline">
        <div class="container left">
          <div class="content"> 
            <h2>2017</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2016</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Timeline;
