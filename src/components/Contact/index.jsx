import React, { Component } from "react";
import ContactSheet from "./ContactSheet.jsx";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ContactSheet />
      </div>
    )
  }
}
export default Contact;
