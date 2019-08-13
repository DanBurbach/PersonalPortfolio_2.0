import React, { Component } from "react";
import "./../../assets/Main.css";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      style: "menu",
      menuStatus: "open"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    switch (this.state.menuStatus) {
      case "open":
        this.setState({
          menuStatus: "close",
          style: "menu active"
        });
        break;
      case "close":
        this.setState({
          menuStatus: "open",
          style: "menu"
        });
        break;
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Menu</button>
        <div className={this.state.style}>
          <ul>
            <li>
              <a href>Main</a>
              <a href>About</a>
              <a href>Projects</a>
              <a href>Skills</a>
              <a href>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;