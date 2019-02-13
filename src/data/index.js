/* eslint-disable import/no-webpack-loader-syntax */
const header = require('!json-loader!yaml-loader!./header.yml');
const skills = require('!json-loader!yaml-loader!./skills.yml');
const stack = require('!json-loader!yaml-loader!./stack.yml');
const experiences = require('!json-loader!yaml-loader!./experiences.yml');
const projects = require('!json-loader!yaml-loader!./projects.yml');
const studies = require('!json-loader!yaml-loader!./studies.yml');
const interests = require('!json-loader!yaml-loader!./interests.yml');

console.log(header);
export default {
  header,
  skills,
  stack,
  experiences,
  projects,
  studies,
  interests,
};
