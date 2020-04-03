import React, { useState } from "react";
import './Contract.scss';
import Web3 from "web3";
import {HelloAbi} from "../../../HelloAbi";
import {WolfpackAbi} from "../../../WolfpackAbi";
import bs58 from 'bs58';

const web3 = new Web3(Web3.givenProvider);

// const contractAddress = "0x5d148743f1194435e006fe1f24193658809523f4"; //Old Hello Contract Address
// const HelloContract = new web3.eth.Contract(HelloAbi, "0xc72E8cE1F739D2CbBBB981C3e38268862B43c39D");
const WolfpackContract = new web3.eth.Contract(WolfpackAbi, "0xc72E8cE1F739D2CbBBB981C3e38268862B43c39D");
const ipfsHash = "QmegjwF6Fbve3wbWaTMhPtYvnhvLJsLLLfUduqn5NYyiBi";

function Contract() {
    const [greeting, setGreeting] = useState(0);

    const setData = async e => {
        e.preventDefault();
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        const gas = await WolfpackContract.methods.addFoodItems(getBytes32FromIpfsHash(ipfsHash)).estimateGas();
        const result = await WolfpackContract.methods
            .addFoodItems(getBytes32FromIpfsHash(ipfsHash))
            .send({ from: account, gas });
        console.log(result);
    };

    const getData = async e => {
        e.preventDefault();
        const result = await WolfpackContract.methods.getFoodItems();

        console.log(result);
    };

    const getBytes32FromIpfsHash = (ipfsListing) => {
        return "0x"+bs58.decode(ipfsListing).slice(2).toString('hex')
    };

    const getIpfsHashFromBytes32 = (bytes32Hex) => {
        // Add our default ipfs values for first 2 bytes:
        // function:0x12=sha2, size:0x20=256 bits
        // and cut off leading "0x"
        const hashHex = "1220" + bytes32Hex.slice(2);
        const hashBytes = Buffer.from(hashHex, 'hex');
        const hashStr = bs58.encode(hashBytes);
        return hashStr
    };

    return (
        <div className="contract">
            <header className="contract-header">
                <form onSubmit={setData}>
                    <label>
                        Set Data:
                        <input
                            type="text"
                            name="greeting"
                            value={greeting}
                            onChange={e => setGreeting(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Set Data" />
                </form>
                <br />
                <button onClick={getData} type="button">
                    Get Data
                </button>
            </header>
        </div>
    );
}
export default Contract;
