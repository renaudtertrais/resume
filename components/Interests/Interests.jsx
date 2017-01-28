import React from 'react';

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
  name: React.PropTypes.string,
  icon: React.PropTypes.string,
};

const Interests = ({ interests }) => (
  <section className="Interests">
    {interests.map(Interest)}
  </section>
);

Interests.displayName = 'Interests';

Interests.propTypes = {
  interests: React.PropTypes.array.isRequired,
};

export default Interests;
