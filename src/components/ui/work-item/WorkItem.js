import React from 'react';
import PropTypes from 'prop-types';
import './WorkItem.scss';

function WorkItem(props) {
    console.log(props)

    return <div className="work-item">
        <div>{props.item.datetime.toLocaleDateString("en-US")}</div>
        <div>{props.item.datetime.getHours()} : {props.item.datetime.getMinutes()}</div>
        <div>{props.item.description}</div>
        <div>{props.item.rate}</div>
    </div>
};

WorkItem.propTypes = {
    item: PropTypes.object
};

WorkItem.defaultProps = {

};

export default WorkItem;
