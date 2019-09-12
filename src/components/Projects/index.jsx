import React, { Component } from 'react';
import './../../assets/Projects.css';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="gallery">
        <div className="galleryItem">
          <h2>Coding Against Humility</h2>
          <a href="https://github.com/DanBurbach/Coding-Against-Humility">
            <img
              src="https://raw.githubusercontent.com/DanBurbach/Coding-Against-Humility/master/src/assets/images/CAH_MainScreen.png"
              alt="Coding Against Humility"
            />
          </a>
          <p>
            A game based off of a hit cardgame. Uses two JSON files for white
            and black cards. Authentication through Firebase, heavy use of CSS
            for animation of black card flip and white card hand, and use of
            drag and drop.
          </p>
          <p>React.js, Redux, CSS3, HTML5, and Firebase Database</p>
        </div>
        <div className="galleryItem">
          <h2>Rick and Morty API</h2>
          <a href="https://github.com/DanBurbach/rick-and-morty-api-react">
            <img
              src="https://github.com/DanBurbach/rick-and-morty-api-react/raw/master/src/assets/Rick&MortyScreenShot.png?raw=true"
              alt="Rick and Morty API Project"
            />
          </a>
          <p>
            A project that uses a non-password API call to return searched for
            data. Library contains characters from "Rick and Morty".
          </p>
          <p>React.js, Redux, CSS3, HTML5, and API calls</p>
        </div>
        <div className="galleryItem">
          <h2>Vacation Quiz</h2>
          <a href="https://vacation-quiz.herokuapp.com/index.html">
            <img
              src="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/vacationquizscreenshot.png?raw=true"
              alt="Vacation Quiz"
            />
          </a>
          <p>
            A webpage using input from the user and radio buttons to provide
            recommended vacation sites.
          </p>
          <p>Javascript, CSS3, and HTML5</p>
        </div>
        <div className="galleryItem">
          <h2>Social Media App</h2>
          <a href="https://github.com/DanBurbach/SocialMediaGame_Main">
            <img
              src="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/SocialMediaGame.jpeg?raw=true"
              alt="Social Media App"
            />
          </a>
          <p>
            A group project: This site was designed so that users can choose
            specific media types to view - Text, Image, or Video; and share
            these with other users. The site uses 3 different APIs to mimic user
            posts for presentation purposes.
          </p>
          <p>Typescript, Angular, Firebase Database, CSS3, and HTML5</p>
        </div>

        <div className="galleryItem">
          <h2>Battleship!</h2>
          <a href="https://github.com/DanBurbach/battle-ships">
            <img
              src="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/BattleShipRuby.png?raw=true"
              alt="Battleship!"
            />
          </a>
          <p>
            A team project build in Ruby, this is a simple game of battleship
            where two players try to sink one anothers ships.
          </p>
          <p>Ruby 2.5.1, Rails 5, HTML5, CSS3, PostgreSQL, Bycrpt</p>
        </div>
        <div className="galleryItem">
          <h2>Blind Date Simulator</h2>
          <a href="https://blind-date-simulator.herokuapp.com/index.html">
            <img
              src="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/BlindDateSimulator.png?raw=true"
              alt="Blind Date Simulator"
            />
          </a>
          <p>
            A webpage that takes you through a blind date where you navigate
            your way through a series of questions, all leading to various
            results.
          </p>
          <p>Javascript, Bootstrap, HTML5, CSS3, and jQuery</p>
        </div>
      </div>
    );
  }
}

export default Projects;
