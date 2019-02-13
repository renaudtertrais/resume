import React from 'react';
import PropTypes from 'prop-types';

import Markdown from '../Markdown';
import { getPeriod, getDuration } from '../../helpers';
import './Experiences.scss';

const renderStackItem = name => (
  <li className="Experience__stack-item" key={name}>
    <img className="Experience__stack-image" src={`assets/logos/${name}.svg`} alt="" />
  </li>
);

const Experience = props => {
  const { company, location, start, end, job, desc, stack } = props;
  const period = getPeriod(start, end);
  const duration = props.duration || getDuration(start, end);
  return (
    <div className="Experience section">
      <h3 className="section__title">{job}</h3>
      <h4 className="section__sub-title">
        <ul className="Experience__stack">{stack.map(renderStackItem)}</ul>
        <span className="Experience__company">{company},</span>
        <span className="Experience__location">{location}</span>
        <span className="Experience__date">
          {period} ({duration})
        </span>
      </h4>
      <Markdown className="section__desc" value={desc} />
    </div>
  );
};

Experience.displayName = 'Experience';

Experience.propTypes = {
  company: PropTypes.string,
  location: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  job: PropTypes.string,
  duration: PropTypes.string,
  desc: PropTypes.string,
  stack: PropTypes.array,
};

Experience.defaultProps = {
  stack: [],
};

const Experiences = ({ experiences }) => (
  <section className="Experiences">
    {experiences.map(exp => (
      <Experience key={exp.start} {...exp} />
    ))}
  </section>
);

Experiences.displayName = 'Experiences';

Experiences.propTypes = {
  experiences: PropTypes.array.isRequired,
};

export default Experiences;
