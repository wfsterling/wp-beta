import React from 'react';
import PropTypes from 'prop-types';
import './Transaction.scss';
import Button from "@material-ui/core/Button";
import SellItem from "../../ui/sell-item/SellItem";
import TextField from "@material-ui/core/TextField";

function Transaction(props) {

    const item = props.sellItems.filter(i => i.id === parseInt(props.match.params.itemId));
    const sellItem = item ? <SellItem key={item[0].name} item={item[0]}/> : undefined;

    return (
        <div className='container'>
            <div className='row full-center'>
                {sellItem}
            </div>
            <div className='row full-center'>
                <TextField
                    id="standard-number"
                    label="Enter Your Pin"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <br/>
            <div className='row full-center'>
                <Button variant="contained" color="primary">
                    COMPLETE
                </Button>
            </div>
        </div>
    )
}

Transaction.propTypes = {
    match: PropTypes.object,
    sellItems: PropTypes.array
};

Transaction.defaultProps = {
    sellItems: []
};

export default Transaction;
