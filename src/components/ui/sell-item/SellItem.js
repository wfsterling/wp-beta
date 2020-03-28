import React from 'react';
import PropTypes from 'prop-types';
import './SellItem.scss';

function SellItem(props) {

    return <div className="sell-item" key={props.item.name}>
        <div>{props.item.image}</div>
        <div>{props.item.name}</div>
        <div>{props.item.price}</div>
        <div>
            <span className='fa fa-plus'></span>
        </div>
    </div>
};

SellItem.propTypes = {
    item: PropTypes.object
};

SellItem.defaultProps = {

};

export default SellItem;
