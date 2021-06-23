const WINNER_ADDRESS = '';
const BSC_URL = 'https://data-seed-prebsc-1-s1.binance.org:8545'; // https://bsc-dataseed1.binance.org:443

let web3 = new Web3(BSC_URL);
let contract = new web3.eth.Contract(ABI, '0xf06E879C00f227F0674857676A4dc5103e12aBE0');
contract.methods.balanceOf(WINNER_ADDRESS).call().then((res) => {
    console.log('Winner balance', res);
});
