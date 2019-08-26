import React from 'react';
import PropTypes from 'prop-types';

import "./../../assets/Projects.css";


function ProjectsInfo(props){
  return (
    <div>
        <div className="container_projectsInfo">
          <div className='col-lg-4'>
            <h4>{props.projectname}</h4>
            <p><em>{props.description}</em></p>
            <img src= {props.screenimage} alt='screenshot' height='175em'/>
            <p><em>{props.language}</em></p>
            <a href={props.link}>Link To Project</a>
          </div>
        </div>
      </div>
  );
}

ProjectsInfo.propTypes = {
  projectname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenimage: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ProjectsInfo;