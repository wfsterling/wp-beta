import React from 'react';
import PropTypes from 'prop-types';
import './Sell.scss';
import SellItem from "../../ui/sell-item/SellItem";

function Sell(props) {
    const sellItems = [];
    props.sellItems.forEach(item => {
        sellItems.push(<SellItem item={item} key={item.datetime}/>)
    });

    return (
        <div className='container'>
            <div className='row full-center'>
                <br/>
                <a href='/'><span className='fa fa-plus-square'/> ADD SELL ITEM</a>
            </div>
            {sellItems}
        </div>
    );
}

Sell.propTypes = {
    sellItems: PropTypes.array
};

Sell.defaultProps = {};

export default Sell;
