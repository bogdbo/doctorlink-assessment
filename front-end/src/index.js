import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './views/Homepage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Homepage />, document.getElementById('root'));

serviceWorker.unregister();
