import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import "./../../assets/Form.css";

const REACT_APP_API =
  "http://localhost:3001/personalwebpage/api/contact/index.php";

class Form extends Component {
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
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: `${REACT_APP_API}`,
      withCredentials: false,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        if (result.data.sent) {
          this.setState({
            mailSent: result.data.sent
          });
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };

  handleFormChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  render() {
    const { successMessage, errorMessage, fieldsConfig } = this.props.config;
    return (
      <div className="container_contactMe">
        <p>Contact Me</p>
        <div>
          <form action="#">
            {fieldsConfig &&
              fieldsConfig.map(field => {
                return (
                  <React.Fragment key={field.id}>
                    {field.type !== "textarea" ? (
                      <React.Fragment>
                        <label>{field.label}</label>
                        <input
                          type={field.type}
                          className={field.klassName}
                          placeholder={field.placeholder}
                          value={field.name}
                          onChange={e =>
                            this.handleFormChange(e, field.fieldName)
                          }
                        />
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <label>{field.label}</label>
                        <textarea
                          className={field.klassName}
                          placeholder={field.placeholder}
                          onChange={event =>
                            this.handleFormChange(event, field.fieldName)
                          }
                          value={field.name}
                        />
                      </React.Fragment>
                    )}
                  </React.Fragment>
                );
              })}
            <input
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Submit"
            />
            <div>
              {this.state.mailSent && (
                <div className="success">{successMessage}</div>
              )}
              {this.state.error && (
                <div className="error">{errorMessage}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  config: PropTypes.object.isRequired
};

export default Form;