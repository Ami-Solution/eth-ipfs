var Web3 = require('web3');
var web3 = new Web3();
// import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
web3.eth.getAccounts().then(console.log);
