import React from 'react';
import './Navbar.scss';
import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';
import Image from '../../static/images/wolf-pack-white-no-text.png'
import {Link} from "react-router-dom";




function Navbar(props) {

    function handleMenuOpenClick(){
        props.setIsMenuOpen(true);
    }

    return (<div className="navbar">
        <div className="navbar-container">
            <div><i className="fa fa-bars" onClick={handleMenuOpenClick}> </i></div>
            <img className="navbar-image" src={Image} alt={"Error"}/>
            <Link to='/'><i className='fa fa-home'> </i></Link>
        </div>
        <div className="navbar-image-container">
        </div>
    </div>);
}

Navbar.propTypes = {
    setIsMenuOpen: PropTypes.func.isRequired
};

Navbar.defaultProps = {};

export default Navbar;
