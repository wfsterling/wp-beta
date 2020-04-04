import React from 'react';
import PropTypes from 'prop-types';
import './WorkItem.scss';
import {Link} from "react-router-dom";

function WorkItem(props) {

    const activateUrl = "/work/activate/" + props.item.id;

    return <div className="work-item">
        <div className="work-item-text">
            <div className='work-item-day'>
                {getDayString(props.item.date.getDay())} : Time (
                {props.item.startTime.getHours()} :
                {(props.item.startTime.getMinutes() < 10 ? "0" : "") + props.item.startTime.getMinutes()} -
                {props.item.endTime.getHours()} :
                {(props.item.endTime.getMinutes() < 10 ? "0" : "") + props.item.endTime.getMinutes()}
                )
            </div>
            <div className='work-item-description'>{props.item.description}</div>
            <div className='work-item-rate'>
                <span className='fa fa-usd'> </span>
                &nbsp;{props.item.rate} / hour
            </div>
        </div>
        <div className="work-item-icon">
            <Link to={activateUrl} className='fa fa-arrow-circle-o-right'> </Link>
        </div>
    </div>
};

WorkItem.propTypes = {
    item: PropTypes.object
};

WorkItem.defaultProps = {

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

export default WorkItem;
