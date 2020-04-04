import React from 'react'
import QrReader from 'react-qr-reader'

function Scan() {

    const handleScan = data => {
        console.log(data, validURL(data));
        if (data) {
            window.location = data;
        }
    };

    function validURL(str) {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    const handleError = err => {
        console.error(err);
        alert(err);
    };

    return (
        <div className='container'>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
        </div>
    )
}

export default Scan;
