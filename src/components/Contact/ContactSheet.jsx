import React, { Component } from "react";
import axios from "axios";

import "./../../assets/ContactSheet.css";

const API_PATH =
  "http://localhost:1992/react-contact-form/api/contact/index.php";

class ContactSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      mailSent: false,
      error: null
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
      <div className="container_contactMe">
        <p>Contact Me</p>
        <div>
          <form action="/action_page.php">
            <label>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstname"
              placeholder="Your name.."
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastname"
              placeholder="Your last name.."
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />

            <label>Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            />
            <input
              type="submit"
              onClick={this.handleFormSubmit}
              value="Submit"
            />
            <div>
              {this.state.mailSent && (
                <div>Thank you for contcting me.</div>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ContactSheet;