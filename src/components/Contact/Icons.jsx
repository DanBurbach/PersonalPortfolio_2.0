import React, { Component } from "react";
import "./../../assets/Footer_Icons.css";


class Input extends Component {
  render() {
    return (
      <div className="icon_footer">
        <div className="icon_layout">
          <div className="icon_layout_linkedIn">
            <a href="https://www.linkedin.com/in/danielburbach/">
              <img
                src={require("./../../assets/icons/linkedinIcon.svg")}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        <p />
        <div className="icon_layout">
          <div className="github_icon_background">
            <a href="https://github.com/DanBurbach">
              <img
                src={require("./../../assets/icons/githubIcon.svg")}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
        <p />

        <div className="icon_layout">
          <a href="https://www.pinterest.com/dannodemo/">
            <img
              src={require("./../../assets/icons/pinterestIcon.svg")}
              alt="Pintrest"
            />
          </a>
        </div>
        <p />

        <div className="icon_layout">
          <a href="https://twitter.com/DannoDemo">
            <img
              src={require("./../../assets/icons/twitterIcon.svg")}
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Input;
