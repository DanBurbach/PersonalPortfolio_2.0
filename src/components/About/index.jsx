import React, { Component } from "react";
import AboutInfo from './AboutInfo';

import Timeline from "../About/Timeline";

import './../../assets/About.css';

const masterPersonalList = [
  {
    title: "How do you describe yourself?",
    who:
      "Originally from the Pacific NW - Portland, Oregon - I was interested in computers and design from an early age. After having dysentary, being saved by a princess, uploading my first 'To Do' list, and losing horribly in Sims I decided to take the plunge into Front-End Development. That, and I really enjoy a good challenge, learning, and being creative.",
    thoughts:
      "Looking for more information, I try to find out as much about something that I can. I enjoy a challenge but appreciating the simplicity of things, I to have a strong affinity for tea, a good book, video games, a laugh at a joke, a technical challenge, and relaxing at home.",
    creativity:
      "Coming from a background in theater design and industrial design - engineered creation has always been a part of my life. When looking at a project I think about what the audience is seeing, what is the main focus or importance of the project, and what the audience will walk away from when they leave.",
    focus:
      "'Play hard, work hard'...right? Balance is important and figuring out what works is always changing for me. If listening to music while I code doesn't work out, taking a walk and doing some sketchwork is always a great way to focus."
  }
];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about_main">
        <div className="about_wrapper">
          <div className="about_item">
            <div className="about_me">
              {masterPersonalList.map((personalinfo, index) => (
                <AboutInfo
                  title={personalinfo.title}
                  who={personalinfo.who}
                  where={personalinfo.where}
                  thoughts={personalinfo.thoughts}
                  creativity={personalinfo.creativity}
                  focus={personalinfo.focus}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="about_item">
            <Timeline />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
