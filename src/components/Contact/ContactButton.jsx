import React, { Component } from "react";

class ContactButton extends Component {
  render() {
    return (
      <div className="form-group">
        <button
          type={this.props.type}
          name={this.props.name}
          className={this.props.className}
          required={this.props.required}
          onChange={this.props.onClick}>
              Send Message
        </button>
      </div>
    );
  }
}

export default ContactButton;
