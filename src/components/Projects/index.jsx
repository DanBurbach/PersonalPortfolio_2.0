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
          <div className="gallery_container">
            <img
              src="https://raw.githubusercontent.com/DanBurbach/Coding-Against-Humility/master/src/assets/images/CAH_MainScreen.png"
              alt="Coding Against Humility"
            />
            <div className="galleryTitle">
              <h2>Coding Against Humility</h2>
            </div>
            <div className="galleryOverlay" />
            <div className="galleryDescription">
              <p>
                A game based off of a hit cardgame. Uses two JSON files for
                white and black cards. Authentication through Firebase, heavy
                use of CSS for animation of black card flip and white card hand,
                and use of drag and drop.
              </p>
              <p>React.js, Redux, CSS3, HTML5, and Firebase Database</p>
            </div>
            <div className="galleryButtonSource">
              <a href="https://github.com/DanBurbach/Coding-Against-Humility">
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="galleryItem">
          <div className="gallery_container">
            <img
              src="https://github.com/DanBurbach/rick-and-morty-api-react/raw/master/src/assets/Rick&MortyScreenShot.png?raw=true"
              alt="Rick and Morty API Project"
            />
            <div className="galleryTitle">
              <h2>Rick and Morty API</h2>
            </div>
            <div className="galleryOverlay" />
            <div className="galleryDescription">
              <p>
                A project that uses a non-password API call to return searched
                for data. Library contains characters from "Rick and Morty".
              </p>
              <p>React.js, Redux, CSS3, HTML5, and API calls</p>
            </div>
            <div className="galleryButtonSource">
              <a href="https://github.com/DanBurbach/rick_and_morty_api_react_v2">
                Source Code
              </a>
            </div>
            <div className="galleryButtonLaunched">
              <a href="https://loving-galileo-7fed7e.netlify.com">
                Launched Site
              </a>
            </div>
          </div>
        </div>

        <div className="galleryItem">
          <div className="gallery_container">
            <img
              src="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/vacationquizscreenshot.png?raw=true"
              alt="Vacation Quiz"
            />
            <div className="galleryTitle">
              <h2>Vacation Quiz</h2>
            </div>
            <div className="galleryOverlay" />
            <div className="galleryDescription">
              <p>
                A webpage using input from the user and radio buttons to provide
                recommended vacation sites.
              </p>
              <p>Javascript, CSS3, and HTML5</p>
            </div>
            <div className="galleryButtonSource">
              <a href="https://github.com/DanBurbach/vacation-quiz">
                Source Code
              </a>
            </div>
            <div className="galleryButtonLaunched">
              <a href="https://vacation-quiz.herokuapp.com/index.html">
                Launched Site
              </a>
            </div>
          </div>
        </div>

        <div className="galleryItem">
          <div className="gallery_container">
            <img
              src="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/SocialMediaGame.jpeg?raw=true"
              alt="Social Media App"
            />
            <div className="galleryTitle">
              <h2>Social Media App</h2>
            </div>
            <div className="galleryOverlay" />
            <div className="galleryDescription">
              <p>
                A group project: This site was designed so that users can choose
                specific media types to view - Text, Image, or Video; and share
                these with other users. The site uses 3 different APIs to mimic
                user posts for presentation purposes.
              </p>
              <p>Typescript, Angular, Firebase Database, CSS3, and HTML5</p>
              <br />
            </div>
            <div className="galleryButtonSource">
              <a href="https://github.com/DanBurbach/SocialMediaGame_Main">
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="galleryItem">
          <div className="gallery_container">
            <img
              src="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/BattleShipRuby.png?raw=true"
              alt="Battleship!"
            />
            <div className="galleryTitle">
              <h2>Battleship!</h2>
            </div>
            <div className="galleryOverlay" />
            <div className="galleryDescription">
              <p>
                A team project build in Ruby, this is a simple game of
                battleship where two players try to sink one anothers ships.
              </p>
              <p>Ruby 2.5.1, Rails 5, HTML5, CSS3, PostgreSQL, Bycrpt</p>
              <br />
            </div>
            <div className="galleryButtonSource">
              <a href="https://github.com/DanBurbach/battle-ships">
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="galleryItem">
          <div className="gallery_container">
            <img
              src="https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/BlindDateSimulator.png?raw=true"
              alt="Blind Date Simulator"
            />
            <div className="galleryTitle">
              <h2>Blind Date Simulator</h2>
            </div>
            <div className="galleryOverlay" />
            <div className="galleryDescription">
              <p>
                A webpage that takes you through a blind date where you navigate
                your way through a series of questions, all leading to various
                results.
              </p>
              <p>Javascript, Bootstrap, HTML5, CSS3, and jQuery</p>
            </div>
            <div className="galleryButtonSource">
              <a href="https://github.com/DanBurbach/blind-date-simulator">
                Source Code
              </a>
            </div>
            <div className="galleryButtonLaunched">
              <a href="https://blind-date-simulator.herokuapp.com/index.html">
                Launched Site
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
