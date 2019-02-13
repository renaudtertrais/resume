/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';

import Markdown from '../Markdown';
import './Projects.scss';

function crop(str, max) {
  const toBeCropped = str.slice(max / 2, -max / 2);
  return toBeCropped.length ? `${str.slice(0, max / 2)}...${str.slice(-max / 2)}` : str;
}

const Project = ({ name, url, desc }) => (
  <div className="Project" key={name}>
    <div className="Project__container">
      <h3 className="section__title">{name}</h3>
      <Markdown className="section__desc" value={desc} />
      <a className="Project__link" href={`https://${url}`} target="_blank">
        <img className="Project__picto" src="assets/logos/github-icon.svg" alt="" />
        {crop(url, 50)}
      </a>
    </div>
  </div>
);

Project.displayName = 'Project';

Project.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  desc: PropTypes.string,
};

const Projects = ({ projects }) => (
  <section className="Projects">{projects.slice(0, 4).map(Project)}</section>
);

Projects.displayName = 'Projects';

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
