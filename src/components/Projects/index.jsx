import React, { Component } from 'react';
import ProjectsInfo from './ProjectsInfo';
import './../../assets/Projects.css';

const masterProjectsList = [
  {
    projectname: 'Vacation Quiz',
    screenimage:
      'https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/vacationquizscreenshot.png?raw=true',
    description:
      'A webpage using input from the user and radio buttons to provide recommended vacation sites',
    language: 'Javascript, HTML, CSS, and jQuery',
    link: 'https://vacation-quiz.herokuapp.com/index.html'
  },
  {
    projectname: 'Social Media App',
    screenimage:
      'https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/SocialMediaGame.jpeg?raw=true',
    description:
      'A group project: This site was designed so that users can choose specific media types to view - Text, Image, or Video; and share these with other users. The site uses 3 different APIs to mimic user posts for presentation purposes.',
    language: 'Typescript, Angular, Firebase database, CSS, HTML',
    link: 'https://github.com/DanBurbach/SocialMediaGame_Main'
  },
  {
    projectname: 'Battleship!',
    screenimage:
      'https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/BattleShipRuby.png?raw=true',
    description:
      'A team project build in Ruby, this is a simple game of battleship where two players try to sink one anothers ships.',
    language: 'Ruby 2.5.1, Rails 5, HTML, CSS, PostgreSQL, Bycrpt',
    link: 'https://github.com/DanBurbach/battle-ships'
  },
  {
    projectname: 'Blind Date Simulator',
    screenimage:
      'https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/assets/images/BlindDateSimulator.png?raw=true',
    description:
      'A webpage that takes you through a blind date where you navigate your way through a series of questions, all leading to various results.',
    language: 'Javascript, Bootstrap, HTML, CSS, and jQuery',
    link: 'https://blind-date-simulator.herokuapp.com/index.html'
  }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='projectsInfo_parent'>
            <div id='projects_list'>
              {masterProjectsList.map((projectinfo, index) => (
                <ProjectsInfo
                  projectname={projectinfo.projectname}
                  description={projectinfo.description}
                  screenimage={projectinfo.screenimage}
                  language={projectinfo.language}
                  link={projectinfo.link}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
    );
  }
}
export default Projects;
