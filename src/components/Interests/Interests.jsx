import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import './Interests.scss';

const Interest = ({ name, icon }) => (
  <div className="Interest" key={name}>
    <div className="Interest__container">
      <Icon className="Interest__icon" name={icon} />
      <h3 className="section__title Interest__title">{name}</h3>
    </div>
  </div>
);

Interest.displayName = 'Interest';

Interest.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

const Interests = ({ interests }) => (
  <section className="Interests">{interests.map(Interest)}</section>
);

Interests.displayName = 'Interests';

Interests.propTypes = {
  interests: PropTypes.array.isRequired,
};

export default Interests;
