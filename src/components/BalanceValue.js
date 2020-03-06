import React, { useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "ws://localhost:3000");


const BalanceValue = () => {
  // Init the State
  const [data, setData] = useState('not loaded');
  // Define the order of actions
  useEffect( () => {
    const fetchData = async () => {
      // Set the Account Array when available
      const web3Accounts = await web3.eth.getAccounts();
      setData(web3Accounts)
      console.log(`accounts`, web3Accounts)
    };
    fetchData();
  }, []);

  const web3Accounts = web3.eth.getAccounts();
  web3Accounts.then((accounts) => {
    const tempAccount = accounts[0];
    const tempBalance = web3.eth.getBalance(tempAccount)
    console.log(`value`, tempBalance)
    // setData(tempBalance);
  })


  return (
    
    <Typography variant="h4">
      ${data}
    </Typography>
      
  );
}


export default BalanceValue