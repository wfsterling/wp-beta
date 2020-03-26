import React from 'react';
import PropTypes from 'prop-types';
import './SellItem.scss';

function SellItem(props) {

    return <div className="sell-item">
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

function getDayString(dayOfWeek){
    return dayOfWeek === 0 ? "Sun" :
        dayOfWeek === 1 ? "Mon" :
        dayOfWeek === 2 ? "Tue" :
        dayOfWeek === 3 ? "Wed" :
        dayOfWeek === 4 ? "Thu" :
        dayOfWeek === 5 ? "Fri" :
        dayOfWeek === 6 ? "Sat" : "Any";
}

export default SellItem;
