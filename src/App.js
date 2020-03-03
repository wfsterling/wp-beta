import React from 'react';
//import NavBar from './components/NavBar';
//import Button from '@material-ui/core/Button';
import Fortmatic from 'fortmatic';

import './App.css';

function App() {
  const fmPhantom = new Fortmatic.Phantom('pk_test_8C80A8E135F3BBCD');
  const handleLoginWithMagicLink = async () => {
    const email = document.getElementById('user-email').value;
    
    const user = await fmPhantom.loginWithMagicLink({ 
      email,
      showUI: false  
    });
    console.log(await user.isLoggedIn()); // => true
    console.log((await user.getMetadata()).publicAddress); // You should use this as a unique user Id.
  };
  

  return (
    
    <div>
      <div className="header"></div>
      <h2>Administration Screen</h2>
      <p>This screen allows you to onboard new users onto new tokens, or to replace lost or stolen tokens.</p>
      
      
      
      <input type="text" id="user-email" placeholder="Enter your email!" />
      <button variant="contained" color="primary" onClick={handleLoginWithMagicLink}>
        Hello World
      </button>

    </div>
  );
}

export default App;
