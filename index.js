import { createElement } from 'react';
import { render } from 'react-dom';
import 'font-awesome/css/font-awesome.css';

import Resume from './components/Resume';
import data from '../data';
import './style/index.scss';

render(createElement(Resume, data), document.getElementById('app'));
