import React, { Component } from "react";

import "./../../assets/Timeline.css";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollIndicator);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollIndicator);
  }

  scrollIndicator = () =>{
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${winScroll / height * 100}%`;

    this.setState({
      scrolled: scrolled
    })
  }
  
  render() {
    const progressBar = {
    height: "5px",
    background: "linear-gradient(to right, #0e1430, #4FC1E9)",
    width: this.state.scrolled
    };

    return (
      <div>
        <div className="progress-container">
          <div
            className="progressBar"
            id="myBar"
            style={progressBar}
          />
        </div>
        <div className="timeline_container">
          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <h3>1987</h3>
              <span>
                First time using any language: DOS. Played "Donald Ducks's
                Playground" often.{" "}
              </span>
            </div>
          </div>

          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <h3>1991</h3>
              <span>First time using a Mac. "Oregon Trail"</span>
            </div>
          </div>

          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <h3>1997</h3>
              <span>Use of MasterCAM Mill in high school engineering</span>
            </div>
          </div>

          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <h3>1999</h3>
              <span>Adobe Photoshop for high school photo journalism</span>
            </div>
          </div>

          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <h3>2000 - 2001</h3>
              <span>
                Clackamas Community College. Studied history, philosophy,
                and journalism.
              </span>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <h3>2001 - 2005</h3>
              <span>
                University of Oregon. Focus on Political Science and Fine
                Arts - including Typeography and Graphic Design. Extensive
                use of Adobe Photoshop and Illustrator
              </span>
            </div>
          </div>

          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <h3>2006</h3>
              <span>
                First job out of college as website developer/designer for
                flower delivery company - Reed & Cross - in Eugene, OR
              </span>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <h3>2007 - 2008</h3>
              <span>
                Americorps with Habitat for Humanity in New Orleans, LA and
                Biloxi, MS. After Hurricane Katrina.
              </span>
            </div>
          </div>

          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <h3>2009 - 2013</h3>
              <span>
                American Tinnitus Association. Fulfillment Coordinator and
                Social Media Marketing Manager
              </span>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <h3>2013 - 2018</h3>
              <span>
                ACME Scenic and Display. Installer I and On-Site Project
                Manager
              </span>
            </div>
          </div>

          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <span>Some work experience</span>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <span>Some work experience</span>
            </div>
          </div>

          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <span>Some work experience</span>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <span>Some work experience</span>
            </div>
          </div>

          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <span>Some work experience</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Timeline;
