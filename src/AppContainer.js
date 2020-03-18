import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux';
import Navbar from "./components/ui/navbar/Navbar";
import './AppContainer.scss';
// import Route from "react-router-dom/es/Route";
// import Login from "./components/pages/Login/Login";
import Work from "./components/pages/Work/Work";

const configureStore = (initialState) => {
    const enhancers = applyMiddleware(logger);
    return createStore(rootReducer, initialState, enhancers);
};

const store = configureStore({});

const AppContainer = () => (
    <Provider store={store}>
        {/*<Router>*/}
            <Navbar/>
            <Work workItems={workItems}/>
            {/*<Switch>*/}
            {/*    <Route path="/">*/}
            {/*        <Login/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/work">*/}
            {/*        <Work/>*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
        {/*</Router>*/}
    </Provider>
);

export default AppContainer;

const workItems = [
    {
        datetime: new Date(2020, 10, 10, 10, 0),
        description: 'Dishwasher',
        rate: '15'
    },
    {
        datetime: new Date(2020, 9, 9, 9, 0),
        description: 'Rolling silverware',
        rate: '15'
    },
    {
        datetime: new Date(2020, 8, 8, 8, 0),
        description: 'Cleaning',
        rate: '15'
    },
];
