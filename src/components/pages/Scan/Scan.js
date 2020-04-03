import React, {useState} from 'react'
import QrReader from 'react-qr-reader'
import { useHistory } from "react-router-dom";

function Scan() {

    const history = useHistory();

    const [result, setResult] = useState('No Result');

    const handleScan = data => {
        console.log(data, validURL(data));
        if (data) {
            setResult(data);
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
        console.error(err)
    };

    return (
        <div>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            <p>{result}</p>
        </div>
    )
}

export default Scan;
