import React from "react";
import PropTypes from "prop-types";
import { getStackImg } from "../../helpers";

import "./Stack.scss";

const getLogoName = (name) => {
  const differentName = name.match(/\((.+)\)$/);
  return differentName
    ? differentName[1]
    : name.toLowerCase().replace(" ", "-");
};

const getStackTitle = (name) => name.replace(/ *\(.+\)$/, "");

const renderStackItem = (name) => {
  const logoName = getLogoName(name);
  const title = getStackTitle(name);
  return (
    <li key={logoName} className="Stack__item">
      <img className="Stack__image" src={getStackImg(logoName)} alt={title} />
      {title}
    </li>
  );
};

const Stack = ({ current, regular, casual }) => (
  <section className="Stack">
    <h3 class="section__title">Daily stack:</h3>
    <ul className="Stack__list">{current.map(renderStackItem)}</ul>
    <br />
    <h3 class="section__title">I used several times:</h3>
    <ul className="Stack__list">{regular.map(renderStackItem)}</ul>
    <br />
    <h3 class="section__title">I already used or try:</h3>
    <ul className="Stack__list">{casual.map(renderStackItem)}</ul>
  </section>
);

Stack.displayName = "Stack";

Stack.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Stack;
