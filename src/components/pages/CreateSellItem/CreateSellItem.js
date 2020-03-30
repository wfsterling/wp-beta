import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './CreateSellItem.scss';

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
                    Description: <input onChange={e => setNewSaleItemAttribute('description', e.target.value)}/>
                </div>
                <div className='work-input'>
                    Cost: <input type='number' value={newSaleItem.cost} onChange={e => setNewSaleItemAttribute('cost', e.target.value)}/>
                </div>
                <div className='work-input'>
                    Active: <input type="checkbox" checked={newSaleItem.isActive} onChange={e => setNewSaleItemAttribute('isActive', e.target.value)}/>
                </div>
                <button onClick={() => props.saveSellItem(newSaleItem)}>Save</button>
            </div>
        </div>
    </div>)
}

CreateSellItem.propTypes = {
    saveSellItem: PropTypes.func.isRequired
};

CreateSellItem.defaultProps = {};

export default CreateSellItem;
