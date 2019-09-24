import React, { Component } from "react";

import "./../../assets/Timeline.css";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="timelineMaster">
        <div className="timeLine">
          <div className="timeline_container timeline_right">
            <div className="timeline_content">
              <h3>1987</h3>
              <span>
                First time using any operating system: DOS.
                <p />
                "Donald Duck's Playground"
              </span>
            </div>
          </div>

          <div className="timeline_container timeline_left">
            <div className="timeline_content">
              <h3>1991</h3>
              <span>
                First time using a Mac
                <p />
                "Oregon Trail"
              </span>
            </div>
          </div>

          <div className="timeline_container timeline_right">
            <div className="timeline_content">
              <h3>1997</h3>
              <span>
                Use of MasterCAM Mill in high school engineering
                <p />
                "Legend of Zelda"
              </span>
            </div>
          </div>

          <div className="timeline_container timeline_left">
            <div className="timeline_content">
              <h3>1999</h3>
              <span>Adobe Photoshop for high school photo-journalism</span>
            </div>
          </div>

          <div className="timeline_container timeline_right">
            <div className="timeline_content">
              <h3>2000 - 2001</h3>
              <span>
                Clackamas Community College.
                <p />
                Studied history, philosophy, and journalism.
              </span>
            </div>
          </div>
          <div className="timeline_container timeline_left">
            <div className="timeline_content">
              <h3>2001 - 2005</h3>
              <span>
                University of Oregon
                <p />
                Bachelors of Science
                <p />
                Political Science and Fine Arts
                <p />
                Including Typography and Graphic Design. Extensive use of Adobe
                Photoshop and Illustrator
                <p />
                Eugene, OR
              </span>
            </div>
          </div>

          <div className="timeline_container timeline_right">
            <div className="timeline_content">
              <h3>2006</h3>
              <span>
                Reed & Cross
                <p />
                Website Developer/Designer & Flower Delivery
                <p />
                Eugene, OR
              </span>
            </div>
          </div>
          <div className="timeline_container timeline_left">
            <div className="timeline_content">
              <h3>2007 - 2008</h3>
              <span>
                Americorps with Habitat for Humanity
                <p />
                New Orleans, LA and Biloxi, MS. after Hurricane Katrina
              </span>
            </div>
          </div>

          <div className="timeline_container timeline_right">
            <div className="timeline_content">
              <h3>2009 - 2013</h3>
              <span>
                American Tinnitus Association
                <p />
                Fulfillment Coordinator and Social Media Marketing Manager
                <p />
                Portland, OR
              </span>
            </div>
          </div>
          <div className="timeline_container timeline_left">
            <div className="timeline_content">
              <h3>2013 - 2018</h3>
              <span>
                ACME Scenic and Display
                <p />
                Installer I and On-Site Project Manager
                <p />
                Portland, OR
              </span>
            </div>
          </div>

          <div className="timeline_container timeline_right">
            <div className="timeline_content">
              <h3>2018-2019</h3>
              <span>
                Epicodus Code School
                <p />
                Focus on React/Javascript/Ruby
                <p />
                Portland, OR
              </span>
            </div>
          </div>

          <div className="timeline_container timeline_left">
            <div className="timeline_content">
              <h3>2019</h3>
              <span>
                Pancake Creative
                <p />
                Intern
                <p />
                Working on a React.js project from an Angular concept. Heavy
                CSS, Firebase Authentication, and Profile Creation.
                <p />
                Portland, OR
              </span>{" "}
            </div>
          </div>

          <div className="timeline_container timeline_right">
            <div className="timeline_content">
              <h3>2019 +</h3>
              <span>
                Further knowledge of Front-End Development and creation of UI/UX
                friendly sites.
                <p />
                Explore languages Vue, React Native, and others.
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Timeline;
