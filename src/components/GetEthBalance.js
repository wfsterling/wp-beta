import React, { useState, useEffect } from "react";
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "ws://localhost:3000");


const GetEthBalance = (props) => {
    const [data, setData] = useState(null);
    let tempAddress = props.ethAddress;
    console.log(tempAddress)
    useEffect(() => {
        const fetchData = async () => {
            web3.eth.getBalance('0xe3379f752660d4545c3b54D18dE176Bf347365d7', (err, wei) => {
            // web3.eth.getBalance(tempAddress, (err, wei) => {
                const balance = web3.utils.fromWei(wei, 'ether') + 'ETH'
                setData(balance); // parse json
                console.log(`balance`, balance)
            });
        
        };
        fetchData();
    }, []);

    

    return <div>{data}</div>; //here will be shown data
};

export default GetEthBalance;

