import React from 'react';
import PropTypes from 'prop-types';

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
  school: PropTypes.string,
  start: PropTypes.number,
  end: PropTypes.number,
  name: PropTypes.string,
};

const Studies = ({ studies }) => <section className="Studies">{studies.map(Study)}</section>;

Studies.displayName = 'Studies';

Studies.propTypes = {
  studies: PropTypes.array.isRequired,
};

export default Studies;
