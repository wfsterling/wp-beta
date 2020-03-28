import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import CompletedWorkItem from "../../ui/completed-work-item/CompletedWorkItem";

function Home(props) {
    const completedWorkItems = [];
    props.completedWorkItems.forEach(item => {
        completedWorkItems.push(<CompletedWorkItem item={item} key={item.datetime}/>)
    });

    return (
        <div className='container'>
            <div className='row full-center'>
                <br/>
            </div>
            {completedWorkItems}
        </div>
    )
}

Home.propTypes = {
    completedWorkItems: PropTypes.array
};

Home.defaultProps = {};

export default Home;
