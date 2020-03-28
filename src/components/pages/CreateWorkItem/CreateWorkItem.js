import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './CreateWorkItem.scss';
import moment from "moment";

function CreateWorkItem(props) {

    const [newWorkItem, setNewWorkItem] = useState({
        date: moment().format('YYYY-MM-DD'),
        startTime: '12:00',
        endTime: '16:00'
    });

    const setNewWorkItemAttribute = (name, value) => {
        let item = Object.assign({}, newWorkItem);
        item[name] = value;
        setNewWorkItem(item);
    };

    console.log(newWorkItem);

    return (<div className="container">
        <div className="create-item">
            <div className='inputs-flex'>
                <div className='work-input'>
                    Date: <input type='date' value={newWorkItem.date} onChange={e => setNewWorkItemAttribute('date', e.target.value)}/>
                </div>
                <div className='work-input'>
                    Start Time: <input type='time' value={newWorkItem.startTime} onChange={e => setNewWorkItemAttribute('startTime', e.target.value)}/>
                </div>
                <div className='work-input'>
                    End Time: <input type='time' value={newWorkItem.endTime} onChange={e => setNewWorkItemAttribute('endTime', e.target.value)}/>
                </div>
                <div className='work-input'>
                    Rate: <input onChange={e => setNewWorkItemAttribute('rate', e.target.value)}/>
                </div>
                <button onClick={props.saveWorkItem}>Save</button>
            </div>
        </div>


    </div>)
};

CreateWorkItem.propTypes = {
    saveWorkItem: PropTypes.func.isRequired
};

CreateWorkItem.defaultProps = {};

export default CreateWorkItem;
