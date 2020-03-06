import React, { useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import Web3 from 'web3';
import GetEthBalance from './GetEthBalance';

const web3 = new Web3(Web3.givenProvider || "ws://localhost:3000");


const GetEthAddress = () => {
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



  return (
    
    <Typography variant="h4">
      <GetEthBalance
        ethAddress = {data}
      />
    </Typography>
      
  );
}


export default GetEthAddress