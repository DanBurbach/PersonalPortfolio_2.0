import React, { Component } from "react";
import InterestsInfo from './InterestsInfo';

const masterPersonalList = [
  {
    title: "How do you describe yourself?",
    who:
      "Coming from a background in theater and design creativity and engineered creation has always been a part of my life. When looking at a project I think about what the viewer is seeing, what is the main focus or importance of the project, and what the viewer will walk away from when they leave.",
    where:
      "Most of my life I have lived in the Pacific North West, however I do really enjoy travelling. Out of that I have been to not only England, but France and most of Southern and Eastern Spain as well. My times there were amazing and left me with wanting to see more of the world whenever I can. Because its only when we leave somewhere that we love do we appreciate the individuality that a location, and a home, has to offer.",
    thoughts:
      "If getting stuck on a thought or idea, I always look for more information and try to find out as much about something that I can. Enjoying a challenge but appreciating the simplicity of things, I to have  a strong affinity for tea, a good book, video games, a laugh at a joke, a technical challenge, and relaxing at home.",
    creativity:
      "What is the wow? That is what I think about creativity. What can I do or go see myself that will make me or anyone else say Holy Cow, thats amazing!!! If I ever do, however, come up upon not really knowing what to think or are stumped about something I find a trip outdoors is always the best fix.",
    focus:
      "Play hard, work hard. The balance is important and figuring out what works is always changing for me. If listening to music while I code doesnt work out, there is always more time later."
  }
];

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {masterPersonalList.map((personalinfo, index) =>
          <InterestsInfo
            title={personalinfo.title}
            who={personalinfo.who}
            where={personalinfo.where}
            thoughts={personalinfo.thoughts}
            creativity={personalinfo.creativity}
            focus={personalinfo.focus}
            key={index}/>
        )}
      </div>
    );
  }
}

export default Interests;
