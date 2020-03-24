import React from 'react';
import PropTypes from 'prop-types';
import './Work.scss';
import WorkItem from "../../ui/work-item/WorkItem";

function Work(props) {
    const workItems = [];
    props.workItems.forEach(item => {
        workItems.push(<WorkItem item={item} key={item.datetime}/>)
    });

    return (
        <div className='container'>
            <div className='row full-center'>
                <br/>
                <a href='/'><span className='fa fa-plus-square'/> ADD WORK ITEM</a>
            </div>
            {workItems}
        </div>
    );
}

Work.propTypes = {
    workItems: PropTypes.array
};

Work.defaultProps = {};

export default Work;
