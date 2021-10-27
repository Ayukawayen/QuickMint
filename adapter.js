const ContractAddrs = {
	'42': '0xd426260baa2e36c14733a2954e1a520836475f15',
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
		alert('Wrong chain. Use Kovan-Testnet instead.');
	}
	
	contract = new ethers.Contract(ContractAddrs[network.chainId], ContractABI, provider.getSigner());
	
	onInit();
}
