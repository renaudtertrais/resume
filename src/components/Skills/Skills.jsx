import React from 'react';
import PropTypes from 'prop-types';

import Markdown from '../Markdown';

const Skill = ({ name, desc }) => (
  <div className="section">
    <h3 className="section__title">{name}</h3>
    <Markdown className="section__desc" value={desc} />
  </div>
);

Skill.displayName = 'Skill';

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const Skills = ({ skills }) => (
  <section className="Skills">
    {skills.map(skill => (
      <Skill key={skill.name} {...skill} />
    ))}
  </section>
);

Skills.displayName = 'Skills';

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
