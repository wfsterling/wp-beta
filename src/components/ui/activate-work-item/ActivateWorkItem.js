import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ActivateWorkItem.scss';
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import QrReader from "react-qr-reader";
import Button from "@material-ui/core/Button";

function ActivateWorkItem(props) {

    const [result, setResult] = useState("Scan result");

    const date = moment(props.item.date);

    return (<div className="work-item">
        <div className="work-item-text">
            <div className='work-item-day'>
                {getDayString(date.day())} - {date.format("YYYY/MM/DD")} -&nbsp;
                ({props.item.startTime.getHours()}:
                {(props.item.startTime.getMinutes() < 10 ? "0" : "") + props.item.startTime.getMinutes()}-
                {props.item.endTime.getHours()}:
                {(props.item.endTime.getMinutes() < 10 ? "0" : "") + props.item.endTime.getMinutes()})
            </div>
            <div className='work-item-description'>{props.item.description}</div>
            <TextField
                id="filled-multiline-static"
                label="Provide a message"
                multiline
                rows="4"
            />
            <div className='work-item-rate'>
                <span className='fa fa-usd'> </span>
                &nbsp;{props.item.rate} Hourly
            </div>

            <div className='activate-work-flex'>
                <div className='activate-work-reader'>
                    <QrReader
                        delay={300}
                        onError={() => {console.log("ERROR")}}
                        onScan={(data) => data !== null ? setResult(data) : null}
                        style={{ width: '100%' }}
                        showViewFinder={false}
                    />
                </div>
            </div>
            <div className='activate-work-flex'>
                {result}
            </div>
            <br/>
            <div className='activate-work-flex'>
                <Button variant="contained" color="primary">
                    Clock In
                </Button>
            </div>

        </div>
    </div>);
}

ActivateWorkItem.propTypes = {
    item: PropTypes.object
};

ActivateWorkItem.defaultProps = {

};

function getDayString(dayOfWeek){
    return dayOfWeek === 0 ? "Sun" :
        dayOfWeek === 1 ? "Mon" :
        dayOfWeek === 2 ? "Tue" :
        dayOfWeek === 3 ? "Wed" :
        dayOfWeek === 4 ? "Thu" :
        dayOfWeek === 5 ? "Fri" :
        dayOfWeek === 6 ? "Sat" : "Any";
}

export default ActivateWorkItem;
