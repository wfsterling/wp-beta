import React, {useState} from 'react';
import Navbar from "./components/ui/navbar/Navbar";
import './AppContainer.scss';
import Work from "./components/pages/Work/Work";
import Footer from "./components/ui/footer/Footer";
import NavButtons from "./components/ui/nav-buttons/NavButtons";
import {Route, Switch} from "react-router-dom";
import Sell from "./components/pages/Sell/Sell";
import Menu from "./components/ui/menu/Menu";
import Home from "./components/pages/Home/Home";

function AppContainer() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function setMenu(menuState){
        setIsMenuOpen(menuState);
    }

    const menu = isMenuOpen ? <Menu setIsMenuOpen={setMenu}/> : undefined;

    return (<React.Fragment>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setMenu}/>
        <NavButtons/>
        {menu}
        <div className='content-wrapper'>
            <Switch>
                <Route exact path="/">
                    <div>Home page</div>
                    <Home workItems={completedWorkItems}/>
                </Route>
                <Route exact path="/work">
                    <Work workItems={workItems}/>
                </Route>
                <Route path="/sell">
                    <Sell sellItems={sellItems}/>
                </Route>
            </Switch>
        </div>
        <Footer/>

    </React.Fragment>);
};

export default AppContainer;

const completedWorkItems = [
    {
        datetime: new Date(2020, 10, 10, 10, 0),
        description: 'Dishwasher',
        rate: '12',
        isActive: false,
        isCompleted: true,
        businessUserId: "1234"
    },
    {
        datetime: new Date(2020, 9, 9, 9, 0),
        description: 'Rolling silverware',
        rate: '15',
        isActive: false,
        isCompleted: true,
        businessUserId: "1234"
    },
    {
        datetime: new Date(2020, 8, 8, 8, 0),
        description: 'Cleaning',
        rate: '15',
        isActive: false,
        isCompleted: true,
        businessUserId: "1234"
    },
];

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


const sellItems = [
    {
        image: '',
        name: 'Lunch Meal',
        price: '5'
    },
    {
        image: '',
        name: 'Dinner Meal',
        price: '10'
    },
    {
        image: '',
        name: 'Beverage',
        price: '1'
    }
];


