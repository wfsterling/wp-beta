import React from 'react';
import './NavButtons.scss';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'

function NavButtons() {

    const location = useLocation();
    const extraWorkClass = location.pathname === '/work' ? 'nav-button-active': '';
    const extraSellClass = location.pathname === '/sell' ? 'nav-button-active': '';

    const locationsWithoutNavButtons = ['/scan', '/admin', '/pindata', '/wallet'];

    if(locationsWithoutNavButtons.indexOf(location.pathname) > -1){
        return <span/>
    }else if(locationsWithoutNavButtons.indexOf(location.pathname.split('/')[1])){
        return <span/>
    }

    return (<div className="nav-button-container">
        <Link to="/work" className={`nav-button ${extraWorkClass}`}>Work</Link>
        <Link to="/sell" className={`nav-button ${extraSellClass}`}>Sell</Link>
    </div>);
}

NavButtons.propTypes = {};

NavButtons.defaultProps = {};

export default NavButtons;
