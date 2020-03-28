import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.scss';
import {Link} from "react-router-dom";

const MenuItem = (props) => (
    <div>
        <Link to={props.url} className='menu-item-container'>
            <span>{props.name}</span>
            <i className='fa fa-arrow-right'/>
        </Link>
        <div className='menu-divider'/>
    </div>
);

MenuItem.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
};

MenuItem.defaultProps = {};

export default MenuItem;
