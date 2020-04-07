import React from 'react';
import PropTypes from 'prop-types';
import './Opportunities.scss';
import OpportunityItem from "../../ui/OpportunityItem/OpportunityItem";

function Opportunities(props) {

    const opportunities = props.workOpportunities.map(opp => <OpportunityItem opportunity={opp} key={opp.description}/>);

    return (<div className="container">
        <div className='balance-container'>
            <h3>Balance: $22.58</h3>
        </div>
        <div>
            Work Opportunities
        </div>
        <div className='row'>
            {opportunities}
        </div>
    </div>);
}

Opportunities.propTypes = {
    workOpportunities: PropTypes.array
};

Opportunities.defaultProps = {
    workOpportunities: []
};

export default Opportunities;
