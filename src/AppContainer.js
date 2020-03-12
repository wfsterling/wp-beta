import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';


const configureStore = (initialState) => {
    const enhancers = applyMiddleware(logger);
    return createStore(rootReducer, initialState, enhancers);
};

const store = configureStore({});

const AppContainer = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default AppContainer;
