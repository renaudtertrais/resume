import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import 'font-awesome/css/font-awesome.css';

import * as serviceWorker from './serviceWorker';
import data from './data';
import Resume from './components/Resume';

console.log(data);

ReactDOM.render(<Resume {...data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
