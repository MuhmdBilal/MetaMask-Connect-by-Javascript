
const ULE_NFT_1000 = "0x5220df53049536D9FE2bd0a0A47b115b0Ce79E43";
const ULE_NFT_1000_ABI = [{
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "contract IERC20",
		"name": "_ULETOken",
		"type": "address"
	},
	{
		"internalType": "contract IPancakeRouter01",
		"name": "_Router",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "_LpReceiver_",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "_BNBReceiver",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "signer_",
		"type": "address"
	}
	],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "approved",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Approval",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "ApprovalForAll",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "approve",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "_maxBatchSize",
		"type": "uint256"
	}],
	"name": "BatchSize",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "PoolPercentage_",
		"type": "uint256"
	}],
	"name": "ChangePoolPercentage",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "_currentIndex",
		"type": "uint256"
	}],
	"name": "ChangeStartingINdex",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "_collectionSize",
		"type": "uint256"
	}],
	"name": "CollectionSize",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "EmergencywithdrawBNB",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "EmergencywithdrawToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "_count",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "_ULEtokens",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "_nonce",
		"type": "uint256"
	},
	{
		"internalType": "bytes",
		"name": "signature",
		"type": "bytes"
	}
	],
	"name": "Mint",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}
	],
	"name": "OwnershipTransferred",
	"type": "event"
},
{
	"inputs": [],
	"name": "Pause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Paused",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "_Raddress",
		"type": "address"
	}],
	"name": "RouterAddress",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "bytes",
		"name": "_data",
		"type": "bytes"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "setApprovalForAll",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "Extension",
		"type": "string"
	}],
	"name": "setBaseExtension",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "_uri",
		"type": "string"
	}],
	"name": "setPrefixURI",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "SwapandLiquifyCount_",
		"type": "uint256"
	}],
	"name": "SWAPCondition",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Transfer",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "transferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "UnPause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Unpaused",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "BNBReceiver_",
		"type": "address"
	}],
	"name": "UpdateBNBReceiver",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "LpReceiver_",
		"type": "address"
	}],
	"name": "UpdateLpReceiver",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "_SWAPTokenPercentage",
		"type": "uint256"
	}],
	"name": "UpdatePercentage",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "withdrawBNB",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "withdrawToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"stateMutability": "payable",
	"type": "receive"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "baseExtension",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "BNBReceiver",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "collectionSize",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "count",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "currentIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "getApproved",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	}
	],
	"name": "isApprovedForAll",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "LpReceiver",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "maxBatchSize",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "nextOwnerToExplicitlySet",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "ownerOf",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "PoolBNBamount",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "PoolPercentage",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "prefixURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "Router",
	"outputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "signer",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "bytes4",
		"name": "interfaceId",
		"type": "bytes4"
	}],
	"name": "supportsInterface",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "SwapandLiquifyCount",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "SWAPTokenPercentage",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}],
	"name": "tokenByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}
	],
	"name": "tokenOfOwnerByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "tokenURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "toString",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "pure",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "totalPublicMinted",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "ULE",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "bytes32",
		"name": "",
		"type": "bytes32"
	}],
	"name": "usedHash",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "WalletOfOwner",
	"outputs": [{
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "WETH",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}
];
var web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org'));

const contract = new web3.eth.Contract(ULE_NFT_1000_ABI, ULE_NFT_1000)


var display;
async function getmetamask() {
	if (window.ethereum) {

		window.web3 = new Web3(ethereum);
		try {
			ethereum.enable();
			account = ethereum.selectedAddress
			console.log("account", account);

			const accountsOne = await ethereum.request({ method: 'eth_requestAccounts' });
			const accountaaa = accountsOne[0];
			document.getElementById('showAccount').innerHTML = "Connected wallet Address:" + "   " + accountaaa
			document.getElementById('showAccount').style.backgroundColor = "aquamarine";
			document.getElementById('showAccount').style.width = "550"
		} catch (error) {
			console.log("error", error);
		}
	}
	else if (window.web3) {
		window.web3 = new Web3(web3.currentProvider);
	}
	else {
		console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
	}
}

async function chnangeIndex() {
	try {
		console.log("account", account);
		let index = await contract.methods.currentIndex().call()
		console.log("index", index)
		await contract.methods.ChangeStartingINdex(8).send({
			from: account
		})
	} catch (e) {
		console.error("error while change index", e);
	}
}