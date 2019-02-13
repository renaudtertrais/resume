/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';

import Markdown from '../Markdown';
import './Projects.scss';

const Project = ({ name, url, desc }) => (
  <div className="Project" key={name}>
    <div className="Project__container">
      <h3 className="section__title">{name}</h3>
      <Markdown className="section__desc" value={desc} />
      <a className="Project__link" href={`https://${url}`} target="_blank">
        <img className="Project__picto" src="assets/logos/github-icon.svg" alt="" />
        {url}
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
