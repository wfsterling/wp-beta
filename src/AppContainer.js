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
import CreateWorkItem from "./components/pages/CreateWorkItem/CreateWorkItem";
import IpfsService from "./components/service/IpfsService";
import Contract from "./components/pages/Contract/Contract";
import CreateSellItem from "./components/pages/CreateSellItem/CreateSellItem";
import Scan from "./components/pages/Scan/Scan";
import Transaction from "./components/pages/Transaction/Transaction";

import SandwichImage from './components/static/images/sandwich.png'
import TacoImage from './components/static/images/taco.png'
import CoffeeImage from './components/static/images/coffee.png'

function AppContainer() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navButtonsVisible, ] = useState(true);
    const [ipfsData, setIpfsData] = useState(undefined);

    function setMenu(menuState){
        setIsMenuOpen(menuState);
    }

    function saveToIpfs(data){
        setIpfsData(data);
    }

    const menu = isMenuOpen ? <Menu setIsMenuOpen={setMenu}/> : undefined;
    const navButtons = navButtonsVisible ? <NavButtons/> : undefined;

    return (<React.Fragment>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setMenu}/>
        {navButtons}
        {menu}
        <div className='content-wrapper'>
            <Switch>
                <Route exact path="/">
                    <Home completedWorkItems={completedWorkItems}/>
                </Route>
                <Route exact path="/work">
                    <Work workItems={workItems}/>
                </Route>
                <Route path="/work/create">
                    <CreateWorkItem saveWorkItem={saveToIpfs}/>
                </Route>
                <Route path="/contract">
                    <Contract/>
                </Route>
                <Route exact path="/sell">
                    <Sell sellItems={sellItems}/>
                </Route>
                <Route path="/sell/create">
                    <CreateSellItem saveSellItem={saveToIpfs}/>
                </Route>
                <Route path="/sell/scan">
                    <Scan/>
                </Route>
                <Route path="/sell/:itemId" component={Transaction}/>
            </Switch>
        </div>
        <Footer/>
        <IpfsService data={ipfsData}/>

    </React.Fragment>)
};

export default AppContainer;

const completedWorkItems = [
    {
        datetime: new Date(2020, 10, 10, 10, 0),
        description: 'Dishwasher',
        rate: '12',
        isActive: false,
        isCompleted: true,
        businessUserId: "1234",
        workingUserId: "4356",
        message: "Great Work",
        payout: 30
    },
    {
        datetime: new Date(2020, 9, 9, 9, 0),
        description: 'Rolling silverware',
        rate: '15',
        isActive: false,
        isCompleted: true,
        businessUserId: "1234",
        workingUserId: "6587",
        payout: 50
    },
    {
        datetime: new Date(2020, 8, 8, 8, 0),
        description: 'Cleaning',
        rate: '15',
        isActive: false,
        isCompleted: true,
        businessUserId: "1234",
        workingUserId: "6546",
        message: "Always wonderful to the customers",
        payout: 30
    },
];

const workItems = [
    {
        date: new Date(2020, 10, 10, 10, 0),
        startTime: new Date(2020, 10, 10, 12, 0),
        endTime: new Date(2020, 10, 10, 16, 0),
        description: 'Dishwasher',
        rate: '15'
    },
    {
        date: new Date(2020, 10, 12, 10, 0),
        startTime: new Date(2020, 10, 12, 12, 0),
        endTime: new Date(2020, 10, 12, 14, 0),
        description: 'Rolling silverware',
        rate: '15'
    },
    {
        date: new Date(2020, 10, 14, 10, 0),
        startTime: new Date(2020, 10, 14, 16, 0),
        endTime: new Date(2020, 10, 14, 20, 0),
        description: 'Cleaning',
        rate: '15'
    },
];


const sellItems = [
    {
        imageUrl: SandwichImage,
        name: 'Lunch Meal',
        price: '5'
    },
    {
        imageUrl: TacoImage,
        name: 'Dinner Meal',
        price: '10'
    },
    {
        imageUrl: CoffeeImage,
        name: 'Beverage',
        price: '1'
    }
];


