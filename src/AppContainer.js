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
import CreateSellItem from "./components/pages/CreateSellItem/CreateSellItem";

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
                <Route exact path="/sell">
                    <Sell sellItems={sellItems}/>
                </Route>
                <Route path="/sell/create">
                    <CreateSellItem saveSellItem={saveToIpfs}/>
                </Route>
            </Switch>
        </div>
        <Footer/>
        <IpfsService data={ipfsData}/>

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


