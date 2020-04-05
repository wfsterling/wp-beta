import React from 'react';
import PropTypes from 'prop-types';
import './Wallet.scss';
import web3 from "web3";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Wallet(props) {

    let address = "Invalid address";

    if(web3.utils.isAddress(props.match.params.walletAddress)){
        address = props.match.params.walletAddress;
    }

    return (<div className="container">
        <h2>Token Confirmation</h2>
        <h3>Found! This token is ready for use with a $5.00 balance</h3>
        <br/>
        TOKEN
        <div className='wallet-flex wallet-item'>
            Token Type
            <h3>Pup</h3>
            {address}
            <div>
                <span className='fa fa-usd'> </span> &nbsp;5.00
            </div>
        </div>
        <br/>
        <div className='wallet-flex'>
            Username
            <TextField
                id="filled-helperText"
                label="Username"
                helperText="Minimum 8 characters"
                variant="filled"
            />
            <br/>
            PIN (number)
            <TextField
                id="filled-helperText"
                label="Username"
                helperText="Minimum 8 characters"
                variant="filled"
            />
            <br/>
            <Button variant="contained" color="primary">
                INITIALIZE TOKEN
            </Button>
            <br/>
        </div>
    </div>)
}

Wallet.propTypes = {};

Wallet.defaultProps = {};

export default Wallet;
