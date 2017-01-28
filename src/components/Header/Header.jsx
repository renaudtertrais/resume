import React from 'react';
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
  title: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
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
          {columns.left.map(link => <HeaderLink key={link.icon} {...link} />)}
        </ul>
        <ul className="Header__links-list">
          {columns.right.map(link => <HeaderLink key={link.icon} {...link} />)}
        </ul>
      </div>
    </header>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  columns: React.PropTypes.shape({
    left: React.PropTypes.arrayOf(React.PropTypes.object),
    right: React.PropTypes.arrayOf(React.PropTypes.object),
  }).isRequired,
};

export default Header;
