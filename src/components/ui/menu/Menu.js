import React     from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';
import MenuItem from "../menu-item/MenuItem";

function Menu(props) {

    const menuTabs = [
        {
            name: 'Worker',
            url: '/'
        },
        {
            name: 'Employer',
            url: '/'
        },
        {
            name: 'Create Work Item',
            url: '/work/create'
        },
        {
            name: 'Create Sell Item',
            url: '/work/sell'
        },
        {
            name: 'Contract',
            url: '/contract'
        },
        {
            name: 'Admin',
            url: '/admin'
        },
        {
            name: 'Scan',
            url: '/scan'
        },
        {
            name: 'Opportunities',
            url: '/work/opportunities'
        }
    ];

    function handleCloseMenuClick(){
        props.setIsMenuOpen(false);
    }

    const menuItems = menuTabs.map(tab => <MenuItem
        key={tab.name}
        name={tab.name}
        url={tab.url}
        closeMenu={handleCloseMenuClick}
    />);

    return (<div className="menu">
            {menuItems}
            <div className='back-button-container' onClick={handleCloseMenuClick}>
                <i className='fa fa-arrow-left'></i>
            </div>
        </div>
    )
}

Menu.propTypes = {
    setIsMenuOpen: PropTypes.func.isRequired
};

Menu.defaultProps = {};

export default Menu;
