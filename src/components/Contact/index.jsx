import React, { Component } from "react";
import Form from "./Form.jsx";
import "./../../assets/Contact.css";


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contact_flex">
        <div>
          <div className="icon_layout">
            <a href="https://www.linkedin.com/in/danielburbach/">
              <img
                src={require("./../../assets/icons/linkedinIcon.svg")}
                alt="LinkedIn"
              />
            </a>
          </div>
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
        </div>

        <Form />

        <div>
          <div className="icon_layout">
            <a href="https://www.pinterest.com/dannodemo/">
              <img
                src={require("./../../assets/icons/pinterestIcon.svg")}
                alt="Pintrest"
              />
            </a>
          </div>
          <div className="icon_layout">
            <a href="https://twitter.com/DannoDemo">
              <img
                src={require("./../../assets/icons/twitterIcon.svg")}
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
