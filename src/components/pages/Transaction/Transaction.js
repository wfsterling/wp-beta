import React from 'react';
import PropTypes from 'prop-types';
import './Transaction.scss';
import Button from "@material-ui/core/Button";

function Transaction(props) {
    console.log(props);

    return (
        <div className='container'>
            <div className='row full-center'>
                <div>
                    This is Sell Item {props.match.params.itemId}
                </div>
            </div>
            <div className='row full-center'>
                <Button variant="contained" color="primary">
                    COMPLETE
                </Button>
            </div>
        </div>
    )
}

Transaction.propTypes = {
    match: PropTypes.object
};

export default Transaction;
