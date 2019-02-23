import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/**
 * Somehow we are running into rendering issue with chrome (some images start stacking up at the end of the list)
 * Safari and Firefox have no issues.
 */
ReactDOM.render(<App />, document.querySelector('#root'));

