import React, { Component } from "react";
import "./../../assets/Clouds.css";

class Clouds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="clouds">
        <div className='cloud_group_1'>
          <div className="cloud c1" />
          <div className="cloud c2" />
          <div className="cloud c3" />
          <div className="cloud c4" />
          <div className="cloud c5" />
        </div>
        <div className='cloud_group_2'>
          <div className="cloud c6" />
          <div className="cloud c7" />
          <div className="cloud c8" />
          <div className="cloud c9" />
          <div className="cloud c10" />
        </div>
        <div className='cloud_group_3'>
          <div className="cloud c11" />
          <div className="cloud c12" />
          <div className="cloud c13" />
          <div className="cloud c14" />
          <div className="cloud c15" />
        </div>
        <div className='cloud_group_4'>
          <div className="cloud c16" />
          <div className="cloud c17" />
          <div className="cloud c18" />
          <div className="cloud c19" />
          <div className="cloud c20" />
        </div>
      </div>
    );
  }
}
export default Clouds;




