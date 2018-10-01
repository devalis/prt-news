import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
