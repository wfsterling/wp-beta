import React, { Component } from "react";
import './Boxload.scss';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import RoomIcon from '@material-ui/icons/Room';
import Box from "3box";


const getThreeBox = async address => {
    const profile = await Box.getProfile(address);
    console.log(profile.location);
    return profile;
};

export default class Boxload extends Component {
  
    // pull address from Metamask
    async getAddressFromMetaMask() {
        if (typeof window.ethereum == "undefined") {
          this.setState({ needToAWeb3Browser: true });
        } else {
          //creates an array of accounts
          const accounts = await window.ethereum.enable();
          // Return the metamask address
          this.setState({ accounts });
          // Create a profile object based on the returned value from the address
          const threeBoxProfile = await getThreeBox(this.state.accounts[0]);
          this.setState({ threeBoxProfile })
        }
      }async componentDidMount() {
        await this.getAddressFromMetaMask();	
    }
    render() {
        return (
          
            <FormControl className="formLoc">
                <TextField className="tf-white"
                  id="input-with-icon-adornment"
                  label="Search by Location"
                  // defaultValue={ this.state?.threeBoxProfile?.location }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <RoomIcon /> { this.state?.threeBoxProfile?.location }
                      </InputAdornment>
                    ),
                  }}
                />
            </FormControl>
          
        );
      }
}