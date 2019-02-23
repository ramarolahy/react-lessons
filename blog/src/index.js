import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // Enables us to us asynchronous functions in our action creators
import logger from 'redux-logger'; // Logs the store on the console whenever an action is fired. Good for debugging.
import promise from 'redux-promise-middleware';
// LOCAL MODULES //
import App from './components/App';
import reducers from './reducers';

const middleware = applyMiddleware(promise, thunk, logger);
// As the second parameter of createStore, the middlewares will affect
// how actions are created and sent to the store
const store = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root'));

