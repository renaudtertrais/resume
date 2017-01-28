import React from 'react';

import './Stack.scss';

const getLogoName = name => {
  const differentName = name.match(/\((.+)\)$/);
  return differentName ? differentName[1] : name.toLowerCase().replace(' ', '-');
};

const getStackTitle = name => name.replace(/ *\(.+\)$/, '');

const renderStackItem = name => {
  const logoName = getLogoName(name);
  const title = getStackTitle(name);
  return (
    <li key={logoName} className="Stack__item">
      <img className="Stack__image" src={`assets/logos/${logoName}.svg`} alt="" />
      {title}
    </li>
  );
};

const Stack = ({ stack }) => (
  <section className="Stack">
    <ul className="Stack__list">{stack.map(renderStackItem)}</ul>
  </section>
);

Stack.displayName = 'Stack';

Stack.propTypes = {
  stack: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default Stack;
