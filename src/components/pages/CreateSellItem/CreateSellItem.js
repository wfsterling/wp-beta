import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './CreateSellItem.scss';
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

function CreateSellItem(props) {

    const [newSaleItem, setNewSaleItem] = useState({
        Description: "",
        cost: "",
        isActive: true
    });

    const setNewSaleItemAttribute = (name, value) => {
        let item = Object.assign({}, newSaleItem);
        item[name] = value;
        setNewSaleItem(item);
    };

    return (<div className="container">
        <div className="create-item">
            <div className='inputs-flex'>
                <div className='work-input'>
                    <TextField id="standard-basic" label="Description" onChange={e => setNewSaleItemAttribute('description', e.target.value)}/>
                </div>
                <div className='work-input'>
                    <TextField id="standard-basic" label="Cost (USD)" onChange={e => setNewSaleItemAttribute('cost', e.target.value)}/>
                </div>
                <br/>
                <div className='work-input'>Active</div>
                <div className='work-input'>
                    <Checkbox
                        checked={newSaleItem.isActive}
                        onChange={e => {setNewSaleItemAttribute('isActive', !newSaleItem.isActive)}}
                    />
                </div>
                <br/>
                <Button variant="contained" color="primary" onClick={() => props.saveSellItem(newSaleItem)}>
                    SAVE
                </Button>
            </div>
        </div>
    </div>)
}

CreateSellItem.propTypes = {
    saveSellItem: PropTypes.func.isRequired
};

CreateSellItem.defaultProps = {};

export default CreateSellItem;
