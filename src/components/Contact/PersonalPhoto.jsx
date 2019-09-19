import React, { Component } from "react";

import "./../../assets/PersonalPhoto.css";

class PersonalPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img 
              src={require("../../assets/personal_photo/DanBurbachPhoto.png")}
              alt="front_personal_photo"
              />
          </div>
          <div className="flip-card-back">
              <img
                src={require("../../assets/personal_photo/DanBurbachAvatar.png")}
                alt="back_avatar_picture"
              />
          </div>
        </div>
      </div>
    );
  }
}
export default PersonalPhoto;
