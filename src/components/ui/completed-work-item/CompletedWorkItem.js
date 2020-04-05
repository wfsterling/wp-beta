import React from 'react';
import PropTypes from 'prop-types';
import './CompletedWorkItem.scss';

function CompletedWorkItem(props) {

    return <div className="completed-work-item">
        <div>
            <img className='completed-work-image' src={props.item.imageUrl} alt='Person Icon'/>
        </div>
        <div>
            <div>You paid <b>{props.item.firstName}</b> ${props.item.payout}</div>
            <div>{props.item.date}</div>
            <br/>
            <div>{props.item.message}</div>
        </div>
    </div>
}

CompletedWorkItem.propTypes = {
    item: PropTypes.object
};

CompletedWorkItem.defaultProps = {

};

export default CompletedWorkItem;
