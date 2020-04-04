import React from 'react';
import PropTypes from 'prop-types';
import './ActivateWork.scss';
import ActivateWorkItem from "../../ui/activate-work-item/ActivateWorkItem";

function ActivateWork(props) {

    console.log(props.workItems);
    const item = props.workItems.filter(i => i.id === parseInt(props.match.params.itemId));
    console.log(item);
    const workItem = item ? <ActivateWorkItem key={item[0].name} item={item[0]}/> : undefined;

    return(
        <div className='container'>
            <div className='row full-center'>
                {workItem}
            </div>
        </div>
    )
}

ActivateWork.propTypes = {
    workItems: PropTypes.array
};

ActivateWork.defaultProps = {
    workItems: []
};

export default ActivateWork;
