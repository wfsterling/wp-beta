const Jobs = artifacts.require("Jobs");

contract("Testing user flow", async accounts => {
    it("Registering different actors", async () => {
      let instance = await Jobs.deployed();
      let e = await instance.registerEmployer.call("0x3132000000000000000000000000000000000000000000000000000000000000", accounts[1], {from: accounts[0]});
      let w = await instance.registerWorker.call("0x3132000000000000000000000000000000000000000000000000000000000000", accounts[2], {from: accounts[0]});
    //   let e1 = await instance.registerEmployer.call(accounts[1], "0x3132000000000000000000000000000000000000000000000000000000000000");
    let check = await instance.getEmployer.call(accounts[1], {from: accounts[0]});


    console.log(e);
    console.log("worker is");
    console.log(w);
    // let check1 = await instance.getEmployer.call(accounts[0]);
    console.log(check);
    // console.log(check2);

    });
});