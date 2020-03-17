import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Web3 from 'web3';
import '../../styles/variables.scss';
import './GetEthAddress.scss';

class GetEthAddress extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Get address
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(`account:`, this.state.account);


    web3.eth.getBalance(this.state.account, (err, wei) => {
      const tempBalance = web3.utils.fromWei(wei, 'ether')
      console.log('balance:', tempBalance);
      this.setState({ balance: tempBalance})
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      balance: 0
    }

    // this.transfer = this.transfer.bind(this)
  }
  render(){
    return (
      <span>
      <Typography variant="h4" className="balance-text">
        {this.state.balance} 
      </Typography>
      <Typography variant="h4" className="balance-text">
        ETH
      </Typography>
      </span>
    );
  }
  
}


export default GetEthAddress
