import React from 'react';
import Navbar from "./components/ui/navbar/Navbar";
import './AppContainer.scss';
import Work from "./components/pages/Work/Work";
import Footer from "./components/ui/footer/Footer";
import NavButtons from "./components/ui/nav-buttons/NavButtons";
import {Route, Switch} from "react-router-dom";

const AppContainer = () => (
    <React.Fragment>
        <Navbar/>
        <NavButtons/>
        <div className='content-wrapper'>
            <Switch>
                <Route exact path="/">
                    <div>Home page</div>
                    {/*<Work workItems={workItems}/>*/}
                </Route>
                <Route exact path="/work">
                     <Work workItems={workItems}/>
                </Route>
                <Route path="/sell">
                    <div>sell page</div>
                </Route>
            </Switch>
        </div>
        <Footer/>

    </React.Fragment>
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
