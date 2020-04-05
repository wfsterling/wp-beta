import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './PinData.scss';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

function PinData(props) {

    const [obj, setObj] = useState("");

    return (<div className="container">
        <div className={'pin-flex'}>
            <TextField
                className='pin-text'
                id="filled-multiline-static"
                label="Data to - must be JSON parsable"
                multiline
                rows="10"
                onInput={(e) => setObj(e.target.value)}
            />
        </div>
        <br/>
        <div className={'pin-flex'}>
            <div>
                <Button variant="contained" color="primary" onClick={() => props.saveDataToIpfs(JSON.parse(obj))}>
                    Pin To IPFS
                </Button>
            </div>
        </div>
    </div>)
}

PinData.propTypes = {
    saveDataToIpfs: PropTypes.func.isRequired
};

PinData.defaultProps = {};

export default PinData;
