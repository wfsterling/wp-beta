import React from 'react';
import PropTypes from 'prop-types';
import './OpportunityItem.scss';

function OpportunityItem(props){

    return (
        <div className='col-md-6'>
            <div className='opportunity-item'>
                <div>{props.opportunity.businessName}</div>
                <div className='opportunity-rate'>${props.opportunity.rate}</div>
                <div>{props.opportunity.description}</div>
            </div>
        </div>
    );
}

OpportunityItem.propTypes = {
    opportunity: PropTypes.object
};

OpportunityItem.defaultProps = {};

export default OpportunityItem;
