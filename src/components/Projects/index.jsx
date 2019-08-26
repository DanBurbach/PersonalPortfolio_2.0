import React, { Component } from 'react';
import './../../assets/Projects.css';

const elements = document.getElementsByClassName("column");
let i;

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleListView = () => {
    for (i = 0; i < elements.length; i++){
      elements[i].style.width = "100%";
    }
  }

   handleGridView = () => {
    for (i = 0; i < elements.length; i++){
      elements[i].style.width = "50%";
    }
  }

  render() {
    return (
      <div>
        <button onclick="listView()">
          <i className="fa fa-bars" /> List
        </button>
        <button onclick="gridView()">
          <i className="fa fa-th-large" /> Grid
        </button>

        <div className="row">
          <div className="column" styles="background-color:#aaa;">
            <h2>Vacation Quiz</h2>
            <img source="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/vacationquizscreenshot.png?raw=true" />
            <p>
              A webpage using input from the user and radio buttons to
              provide recommended vacation sites
            </p>
            <p>Javascript, HTML, CSS, and jQuery</p>
            'https://vacation-quiz.herokuapp.com/index.html'
          </div>
          <div className="column" styles="background-color:#bbb;">
            <h2>Social Media App</h2>
            <img source="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/SocialMediaGame.jpeg?raw=true" />
            <p>
              A group project: This site was designed so that users can
              choose specific media types to view - Text, Image, or Video;
              and share these with other users. The site uses 3 different
              APIs to mimic user posts for presentation purposes.
            </p>
            <p>Typescript, Angular, Firebase database, CSS, HTML</p>
            'https://github.com/DanBurbach/SocialMediaGame_Main'
          </div>
        </div>

        <div className="row">
          <div className="column" styles="background-color:#ccc;">
            <h2>Battleship!</h2>
            <img src="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/BattleShipRuby.png?raw=true" />
            <p>
              A team project build in Ruby, this is a simple game of
              battleship where two players try to sink one anothers ships.
            </p>
            <p>Ruby 2.5.1, Rails 5, HTML, CSS, PostgreSQL, Bycrpt</p>
            'https://github.com/DanBurbach/battle-ships'
          </div>
          <div className="column" styles="background-color:#ddd;">
            <h2>Blind Date Simulator</h2>
            <img src="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/BlindDateSimulator.png?raw=true" />
            <p>
              A webpage that takes you through a blind date where you
              navigate your way through a series of questions, all leading
              to various results.'
            </p>
            <p>Javascript, Bootstrap, HTML, CSS, and jQuery</p>
            'https://blind-date-simulator.herokuapp.com/index.html'
          </div>
        </div>

        <div className="row">
          <div className="column" styles="background-color:#ccc;">
            <h2>Column 5</h2>
            <p>Some text..</p>
          </div>
          <div className="column" styles="background-color:#ddd;">
            <h2>Column 6</h2>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
