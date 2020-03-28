import React from 'react';
import PropTypes from 'prop-types';
import './CompletedWorkItem.scss';

function CompletedWorkItem(props) {

    return <div className="work-item">
        <div>You paid user id {props.item.workingUserId} ${props.item.payout}</div>
        <div>{props.item.date}</div>
        <div>{props.item.message}</div>
    </div>
}

CompletedWorkItem.propTypes = {
    item: PropTypes.object
};

CompletedWorkItem.defaultProps = {

};

export default CompletedWorkItem;
