import React from 'react';
import './Admin.scss';
import Button from "@material-ui/core/Button";

const Admin = () => (
  <div className="container admin">
      <div className='row admin-header'>
          <h2>Admininistration Screen</h2>
      </div>
      <div className='row admin-text'>
            This screen allows you to onboard new users onto new tokens. or to replace lost or stolen tokens by using a username and PIN.
      </div>
      <div className='row'>
          <div className='outside-button-flex'>
              <div className='button-flex'>
                  <br/>
                  <Button variant="contained" color="primary" onClick={() => window.location = '/scan'}>
                      SCAN NEW TOKEN
                  </Button>
                  <br/>
                  <Button variant="contained" color="primary" onClick={() => console.log("REPLACE")}>
                      REPLACE TOKEN
                  </Button>
             </div>
          </div>
      </div>
  </div>
);

Admin.propTypes = {};

Admin.defaultProps = {};

export default Admin;
