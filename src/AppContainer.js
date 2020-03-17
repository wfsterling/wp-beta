import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux';
import Navbar from "./components/ui/navbar/Navbar";
import './AppContainer.scss';

const configureStore = (initialState) => {
    const enhancers = applyMiddleware(logger);
    return createStore(rootReducer, initialState, enhancers);
};

const store = configureStore({});

const AppContainer = () => (
    <Provider store={store}>
        <Navbar></Navbar>
    </Provider>
);

export default AppContainer;
