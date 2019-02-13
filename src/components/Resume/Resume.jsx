import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Skills from '../Skills';
import Stack from '../Stack';
import Experiences from '../Experiences';
import Projects from '../Projects';
import Studies from '../Studies';
import Interests from '../Interests';
import Footer from '../Footer';
import './Resume.scss';

const Resume = props => (
  <div className="Resume">
    <Header {...props.header} />

    <h2 className="Resume__section-title">
      <span>Skills</span>
    </h2>
    <Skills {...props.skills} />

    <h2 className="Resume__section-title">
      <span>Stack</span>
    </h2>
    <Stack {...props.stack} />

    <h2 className="Resume__section-title">
      <span>Experiences</span>
    </h2>
    <Experiences {...props.experiences} />

    <h2 className="Resume__section-title">
      <span>Projects</span>
    </h2>
    <Projects {...props.projects} />

    <h2 className="Resume__section-title">
      <span>Studies</span>
    </h2>
    <Studies {...props.studies} />

    <h2 className="Resume__section-title">
      <span>Interests</span>
    </h2>
    <Interests {...props.interests} />

    <Footer />
  </div>
);

Resume.displayName = 'Resume';

Resume.propTypes = {
  header: PropTypes.object,
  skills: PropTypes.object,
  stack: PropTypes.object,
  experiences: PropTypes.object,
  projects: PropTypes.object,
  studies: PropTypes.object,
  interests: PropTypes.object,
};

Resume.defaultProps = {
  header: {},
  skills: {},
  stack: {},
  experiences: {},
  projects: {},
  studies: {},
  interests: {},
};

export default Resume;
