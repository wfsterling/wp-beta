import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './CreateWorkItem.scss';
import moment from "moment";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


function CreateWorkItem(props) {

    console.log(moment().startOf('day').format('YYYY-MM-DD HH:mm'));

    const [newWorkItem, setNewWorkItem] = useState({
        date: moment().format('YYYY-MM-DD'),
        startTime:  moment().startOf('day').add(12, 'h').format('YYYY-MM-DD HH:mm'),
        endTime:  moment().startOf('day').add(16, 'h').format('YYYY-MM-DD HH:mm')
    });

    const setNewWorkItemAttribute = (name, value) => {
        let item = Object.assign({}, newWorkItem);
        item[name] = value;
        setNewWorkItem(item);
    };

    return (<div className="container">
        <div className="create-item">
            <div className='inputs-flex'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className='work-input'>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date"
                            value={newWorkItem.date}
                            onChange={date => setNewWorkItemAttribute('date', date)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </div>
                    <div className='work-input'>
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Start Time"
                            value={newWorkItem.startTime}
                            onChange={time => setNewWorkItemAttribute('startTime', time)}
                        />
                    </div>
                    <div className='work-input'>
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="End Time"
                            value={newWorkItem.endTime}
                            onChange={time => setNewWorkItemAttribute('endTime', time)}
                        />
                    </div>
                </MuiPickersUtilsProvider>
                <div className='work-input'>
                    <TextField id="standard-basic" label="Cost (USD)" onChange={e => setNewWorkItemAttribute('rate', e.target.value)}/>
                </div>
                <br/>
                <Button variant="contained" color="primary" onClick={() => props.saveWorkItem(newWorkItem)}>
                    SAVE
                </Button>
            </div>
        </div>
    </div>)
}

CreateWorkItem.propTypes = {
    saveWorkItem: PropTypes.func.isRequired
};

CreateWorkItem.defaultProps = {};

export default CreateWorkItem;
