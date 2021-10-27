const ContractAddrs = {
	'3': '0x9afa6af134d7b1b3ef8b7a02c00667beb0bed99a',
	'4': '0x9afa6af134d7b1b3ef8b7a02c00667beb0bed99a',
	'5': '0x9afa6af134d7b1b3ef8b7a02c00667beb0bed99a',
	'42': '0x9afa6af134d7b1b3ef8b7a02c00667beb0bed99a',
};
const ContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageUri",
				"type": "string"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "description",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
];

let contract;
init();

async function init() {
	let provider = new ethers.providers.Web3Provider(window.ethereum);
	if(!provider) {
		alert('No wallet found');
	}
	
	let network = await provider.getNetwork();
	if(!ContractAddrs[network.chainId]) {
		alert('Unsupported chain ID. Use one of these chains instead: Ropsten(3), Rinkeby(4), Goerli(5), or Kovan(42).');
	}
	
	contract = new ethers.Contract(ContractAddrs[network.chainId], ContractABI, provider.getSigner());
	
	onInit();
}
