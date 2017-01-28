import React from 'react';

import Markdown from '../Markdown';

const Skill = ({ name, desc }) => (
  <div className="section">
    <h3 className="section__title">{name}</h3>
    <Markdown className="section__desc" value={desc} />
  </div>
);

Skill.displayName = 'Skill';

Skill.propTypes = {
  name: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
};

const Skills = ({ skills }) => (
  <section className="Skills">
    {skills.map(skill => <Skill key={skill.name} {...skill} />)}
  </section>
);

Skills.displayName = 'Skills';

Skills.propTypes = {
  skills: React.PropTypes.array.isRequired,
};

export default Skills;
