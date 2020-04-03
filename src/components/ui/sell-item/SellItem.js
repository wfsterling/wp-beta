import React from 'react';
import PropTypes from 'prop-types';
import './SellItem.scss';
import {Link} from "react-router-dom";

function SellItem(props) {

    return <div className="sell-item" key={props.item.name}>
        <div className='sell-item-image'>
            <img className='sell-item-image' src={props.item.imageUrl} alt="Sell Item"/>
        </div>
        <div className='sell-item-name'>{props.item.name}</div>
        <div className='sell-item-price'>${props.item.price}</div>
        <div>
            <Link to='/sell/scan' className='fa fa-plus'/>
        </div>
    </div>
};

SellItem.propTypes = {
    item: PropTypes.object
};

SellItem.defaultProps = {

};

export default SellItem;
