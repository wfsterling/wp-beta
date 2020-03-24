import React from 'react';
import PropTypes from 'prop-types';
import './WorkItem.scss';

function WorkItem(props) {
    console.log(props)

    return <div className="work-item">
        <div>
            {getDayString(props.item.datetime.getDay())} : Time (
            {props.item.datetime.getHours()} :
            {(props.item.datetime.getMinutes() < 10 ? "0" : "") + props.item.datetime.getMinutes()}
            )
        </div>
        <div>{props.item.description}</div>
        <div>{props.item.rate}</div>
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
