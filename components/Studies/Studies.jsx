import React from 'react';

import { getDuration } from '../../helpers';
import './Studies.scss';

const Study = ({ school, start, end, name }) => (
  <div className="section Study" key={school}>
    <h3 className="section__title">{name}</h3>
    <div className="Study__school">
      {school} - {start} to {end} ({getDuration(start, end)})
    </div>
  </div>
);

Study.displayName = 'Study';

Study.propTypes = {
  school: React.PropTypes.string,
  start: React.PropTypes.number,
  end: React.PropTypes.number,
  name: React.PropTypes.string,
};

const Studies = ({ studies }) => (
  <section className="Studies">
    {studies.map(Study)}
  </section>
);

Studies.displayName = 'Studies';

Studies.propTypes = {
  studies: React.PropTypes.array.isRequired,
};

export default Studies;
