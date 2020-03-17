import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux';
import AppContainer from "./AppContainer";

const configureStore = (initialState) => {
    const enhancers = applyMiddleware(logger);
    return createStore(rootReducer, initialState, enhancers);
};

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
