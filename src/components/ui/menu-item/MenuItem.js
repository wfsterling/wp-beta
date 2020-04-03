import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.scss';
import {Link} from "react-router-dom";

const MenuItem = (props) => (
    <div>
        <div className='menu-item'>
            <Link to={props.url} className='menu-item-container' onClick={props.closeMenu}>
                <span>{props.name}</span>
                <i className='fa fa-arrow-right'/>
            </Link>
        </div>
        <div className='menu-divider'/>
    </div>
);

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    closeMenu: PropTypes.func.isRequired
};

MenuItem.defaultProps = {};

export default MenuItem;
