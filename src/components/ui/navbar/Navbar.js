import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import 'font-awesome/css/font-awesome.min.css';

import Image from '../../static/images/wolf-pack-white-no-text.png'

const Navbar = () => (
  <div className="navbar">
      <div className="navbar-container">
          <div><i className="fa fa-bars"></i></div>
          <img className="navbar-image" src={Image} alt={"Error"} />
          <div><i className="fa fa-home"></i></div>
      </div>
      <div className="navbar-image-container">
      </div>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
