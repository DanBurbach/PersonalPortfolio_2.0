import React, { Component } from "react";
import toastr from 'toastr';
import Reaptcha from "reaptcha";
import 'jquery';

import * as emailjs from 'emailjs-com';

import TextArea from './TextArea';
import Input from './Input';
import "./../../assets/Footer_Form.css";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false,
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.validateMail = this.validateMail.bind(this);
  }

  onVerify = recaptchaResponse => {
    this.setState({
      verified: true
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.validateMail()) {
      return;
    }

    let templateParams = {
      from_name: this.state.name + "(" + this.state.email + ")",
      to_name: "dburbach1982@gmail.com",
      subject: this.state.subject,
      message_html: this.state.message
    };
    console.log(templateParams);

    const user_id = "user_QJL88dkrzyOd3qgl27jCd";
    emailjs
      .send("gmail:dburbach", "template_F8WBtiXa", templateParams, user_id)
      .then(
        function(response) {
          toastr.success("Message sent successfully");
          console.log("Success!", response.status, response.text);
        },
        function(err) {
          toastr.error(err);
          console.log(err);
        }
      );

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    console.log(this.state);
  };

  handleFormChange = event => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  validateMail() {
    let errors = {};
    let formIsValid = true;

    console.log(formIsValid);

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = "Minimum 3 symbols";
      formIsValid = false;
    }
    if (!this.state.subject || this.state.subject.length < 3) {
      errors.subject = "Minimum 3 symbols";
      formIsValid = false;
    }
    if (!this.state.message || this.state.message.length < 8) {
      errors.message = "Minimum 8 symbols";
      formIsValid = false;
    }
    if (!this.state.email || this.state.email.length < 3) {
      errors.email = "Minimum 3 symbols";
      formIsValid = false;
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(this.state.email)) {
      errors.email = "This is not a valid email";
      formIsValid = false;
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  handleResetForm = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  render() {
    return (
      <div className="container_contactMe">
        {/* <br />
        <div className="contact_title">Contact Me</div>
        <br /> */}

        <div>
          <form
            ref={element => (this.myContactFormRef = element)}
            id={this.props.id}
            className={this.props.className}
            name={this.props.name}
            method={this.props.method}
            action={this.props.action}
          >
            <Input
              type="text"
              name="name"
              className="form-control"
              required="required"
              onChange={this.handleFormChange}
              value={this.state.name}
              error={this.state.errors.name}
            />
            <Input
              type="email"
              name="email"
              className="form-control"
              required="required"
              onChange={this.handleFormChange}
              value={this.state.email}
              error={this.state.errors.email}
            />
            <Input
              type="text"
              name="subject"
              className="form-control"
              required="required"
              onChange={this.handleFormChange}
              value={this.state.subject}
              error={this.state.errors.subject}
            />
            <TextArea
              type="message"
              name="message"
              className="form-control"
              required="required"
              rows="8"
              onChange={this.handleFormChange}
              value={this.state.message}
              error={this.state.errors.message}
            />
            <button
              type="submit"
              required="required"
              onClick={this.handleFormSubmit}
              disabled={!this.state.verified}
            >
              Submit
            </button>
            <button
              type="reset"
              value="Reset"
              onClick={this.handleResetForm}
            >
              Reset
            </button>
            <Reaptcha
              theme="dark"
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onVerify={this.onVerify}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;