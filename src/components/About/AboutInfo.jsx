import React from "react";
import PropTypes from "prop-types";

function AboutInfo(props) {
  return (
    <div>
        <div>
          <h3>{props.title}</h3>
          <div>
            <h4>Who am I...</h4>
            <div>{props.who}</div>
          </div>
          <div>
            <h4>How do I think...</h4>
            <div>{props.thoughts}</div>
          </div>
          <div>
            <h4>What is creativity to me...</h4>
            <div>{props.creativity}</div>
          </div>
          <div>
            <h4>How do I focus...</h4>
            <div>{props.focus}</div>
          </div>
        </div>
      </div>
  );
}

AboutInfo.propTypes = {
  title: PropTypes.string.isRequired,
  who: PropTypes.string.isRequired,
  thoughts: PropTypes.string.isRequired,
  creativity: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired
};

export default AboutInfo;
