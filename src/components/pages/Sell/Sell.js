import React from 'react';
import PropTypes from 'prop-types';
import './Sell.scss';
import SellItem from "../../ui/sell-item/SellItem";
import {Link} from "react-router-dom";

function Sell(props) {
    const sellItems = [];
    props.sellItems.forEach(item => {
        sellItems.push(<SellItem key={item.name} item={item}/>)
    });

    return (
        <div className='container'>
            <div className='row full-center'>
                <br/>
                <Link to={"/sell/create"}><span className='fa fa-plus-square'/> ADD SELL ITEM</Link>
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
