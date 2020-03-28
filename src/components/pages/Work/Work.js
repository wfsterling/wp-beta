import React from 'react';
import PropTypes from 'prop-types';
import './Work.scss';
import WorkItem from "../../ui/work-item/WorkItem";
import {Link} from "react-router-dom";

function Work(props) {
    const workItems = [];
    props.workItems.forEach(item => {
        workItems.push(<WorkItem item={item} key={item.datetime}/>)
    });

    return (
        <div className='container'>
            <div className='row full-center'>
                <br/>
                <Link to={"/work/create"}><span className='fa fa-plus-square'/> ADD WORK ITEM</Link>
            </div>
            {workItems}
        </div>
    );
}

Work.propTypes = {
    workItems: PropTypes.array,
    url: PropTypes.string
};

Work.defaultProps = {};

export default Work;
