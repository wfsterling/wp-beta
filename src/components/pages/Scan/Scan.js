import React from 'react';
import QrReader from 'react-qr-reader';
import './Scan.scss';
import Button from "@material-ui/core/Button";

function Scan(props) {

    const handleScan = data => {
        if (data) {
            window.location = data;
        }
    };

    const handleError = err => {
        console.error(err);
        alert(err);
    };

    return (
        <div className='page-container'>
            <div className='scan-container'>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '100%' }}
                />
                Scan the QR code on the back of a wolfpack token
                <Button className='scan-button' variant="contained" color="primary" onClick={() => window.location = '/scan'}>
                    <span className='fa fa-qrcode'> </span> &nbsp; SCAN
                </Button>
                <div>
                <Button className='scan-button' variant="outlined   " onClick={() => props.history.goBack()}>
                    CANCEL
                </Button>
                </div>
            </div>
        </div>
    )
}

export default Scan;
