import React from 'react';
import PropTypes from 'prop-types';
const axios = require('axios');

class IpfsService extends React.Component {

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            if(this.props.data !== undefined){
                this.pinFileToIPFS(this.props.data);
            }
        }
    }

    pinFileToIPFS = (data) => {
        const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
        axios.post(
            url,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'pinata_api_key': 'ecc820538e4e13ac58f9', // Just a test account. We should start a new account if we need to get more serious because I committed these keys on accident
                    'pinata_secret_api_key': 'a835472913eea3d1b187abd953d779fca7669b449b59ad17c8a5d5f4b59e966c'
                }
            }
        ).then(function (response) {
            console.log(response);
            //handle response here
        }).catch(function (error) {
            console.error(error);
            //handle error here
        });
    };

    testAuth = () => {

        const url = `https://api.pinata.cloud/data/testAuthentication`;
        return axios.get(
            url,
            {
                headers: {
                    // 'Content-Type': 'application/json',
                    'pinata_api_key': 'ecc820538e4e13ac58f9',
                    'pinata_secret_api_key': 'a835472913eea3d1b187abd953d779fca7669b449b59ad17c8a5d5f4b59e966c'
                }
            }
        ).then(function (response) {
            console.log(response);
            //handle response here
        }).catch(function (error) {
            console.error(error);
            //handle error here
        });
    };


    render() {
        return "";
    }
}

IpfsService.propTypes = {
    data: PropTypes.object
};

IpfsService.defaultProps = {};


export default IpfsService;
