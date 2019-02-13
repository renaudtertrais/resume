/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Icon from '../Icon';
import './Header.scss';

const HeaderLink = ({ title, href, icon }) => (
  <li className="Header__link-item">
    <a className="Header__link" href={href} target="_blank">
      <Icon name={icon} className="Header__link-icon" />
      {title}
    </a>
  </li>
);

HeaderLink.displayName = 'HeaderLink';

HeaderLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const Header = ({ columns }) => {
  const now = moment();
  const birthday = moment('06/03/1988', 'DD/MM/YYYY');
  const age = moment.duration(now.valueOf() - birthday.valueOf()).years();

  return (
    <header className="Header">
      <div className="Header__banner">
        <div className="Header__image-container">
          <img className="Header__image" src="assets/renaud-tertrais.jpg" alt="" />
        </div>
        <div>
          <h2 className="Header__name">
            Renaud TERTRAIS
            <span className="Header__age"> - {age} years old</span>
          </h2>
          <h1 className="Header__function">
            Senior <span className="Header__function-alt">Frontend</span> Developer
          </h1>
        </div>
      </div>
      <div className="Header__columns">
        <ul className="Header__links-list">
          {columns.left.map(link => (
            <HeaderLink key={link.icon} {...link} />
          ))}
        </ul>
        <ul className="Header__links-list">
          {columns.right.map(link => (
            <HeaderLink key={link.icon} {...link} />
          ))}
        </ul>
      </div>
    </header>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  columns: PropTypes.shape({
    left: PropTypes.arrayOf(PropTypes.object),
    right: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Header;
