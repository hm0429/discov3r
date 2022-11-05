/***********************************************************************************
* constants
***********************************************************************************/
const CONTRACT = {
	ADDRESS: "0x8204F84b07A20BF96C16703892DC816C27554f44",
	ABI: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"createAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"latitude","type":"string"},{"internalType":"string","name":"longitude","type":"string"},{"internalType":"bytes32","name":"keyHash","type":"bytes32"}],"name":"createTreasure","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"treasureId","type":"uint256"},{"internalType":"string","name":"key","type":"string"}],"name":"discover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setTreasureBoxContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasureBox","outputs":[{"internalType":"contractTreasureBox","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"treasureId","type":"uint256"},{"internalType":"string","name":"uuid","type":"string"}],"name":"unlockTreasureBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"verified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
}

const TB_CONTRACT = {
	ADDRESS: "0xc76a18b0ae5afde5be697595d8cf1ccbb28c7d99",
	ABI: [{"inputs":[{"internalType":"address","name":"main","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAIN_CONTRACT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"didDiscover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTreasure","outputs":[{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"latitude","type":"string"},{"internalType":"string","name":"longitude","type":"string"},{"internalType":"bytes32","name":"keyHash","type":"bytes32"},{"internalType":"enumITreasure.TreasureType","name":"treasureType","type":"uint8"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bool","name":"isDiscovered","type":"bool"}],"internalType":"structITreasure.Treasure","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"latitude","type":"string"},{"internalType":"string","name":"longitude","type":"string"},{"internalType":"bytes32","name":"keyHash","type":"bytes32"},{"internalType":"enumITreasure.TreasureType","name":"treasureType","type":"uint8"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bool","name":"isDiscovered","type":"bool"}],"internalType":"structITreasure.Treasure","name":"treasure","type":"tuple"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"treasures","outputs":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"latitude","type":"string"},{"internalType":"string","name":"longitude","type":"string"},{"internalType":"bytes32","name":"keyHash","type":"bytes32"},{"internalType":"enumITreasure.TreasureType","name":"treasureType","type":"uint8"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bool","name":"isDiscovered","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
}

const NETWORKS = {
	'0x89': [{
		chainId: '0x89',
		chainName: 'Polygon',
		rpcUrls: ['https://polygon-rpc.com/'],
		nativeCurrency: {
			name: "MATIC",
			symbol: "MATIC",
			decimals: 18
		},
		blockExplorerUrls: ['https://polygonscan.com/']
	}],
	'0x13881': [{
		chainId: '0x13881',
		chainName: 'Mumbai',
		rpcUrls: ['https://rpc-mumbai.matic.today/'],
		nativeCurrency: {
			name: "MATIC",
			symbol: "MATIC",
			decimals: 18
		},
		blockExplorerUrls: ['https://mumbai.polygonscan.com/']
	}]
} 

/***********************************************************************************
* utils
***********************************************************************************/
const getUrlParam = (key) => {
	key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	const regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
	const results = regex.exec(location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function getChainId(chainName) {
	switch (chainName) {
		case 'polygon':
			return '0x89';
		case 'mumbai':
			return '0x13881';
		default:
			return '0x13881';
	}
}

/***********************************************************************************
* UI
***********************************************************************************/
function showLoading() {
	$('#loading ,#spinner').height($(window).height()).css('display', 'block')
}

function hideLoading() {
	$('#loading ,#spinner').height($(window).height()).css('display', 'none')
}

function updateView() {
	const isWalletConnected = ethereum.selectedAddress ? true : false
	if (isWalletConnected) {
		$('#address-label').text(ethereum.selectedAddress.substr(0, 5) + '...' + ethereum.selectedAddress.slice(-4))
		$('.only-logout').hide()
		$('.only-login').show()
	} else {
		$('#address-label').text('')
		$('.only-logout').show()
		$('.only-login').hide()
	}
}

/***********************************************************************************
* Map
***********************************************************************************/
async function loadTreasureBoxes() {
	const count = (await window.tb.totalSupply()).toNumber();
	window.tbs = [];
	for (let i = 0; i <= count; i++) {
		const tb = await window.tb.treasures(i);
		tbs.push({...tb, id: i});
	}
}

function displayMap() {
	if (window.tbs.length < 1) {
		return;
	}

	window.map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: {
			lat: 37.8029308, 
			lng: -122.4484231
		},
	})

	window.tbs.forEach((tb, index) => {
		if (!tb.latitude || !tb.longitude) {
			return
		}
		addMarker(window.map, tb);
	})
}

function getPosition(tb) {
	return {lat: parseFloat(tb.latitude), lng: parseFloat(tb.longitude)};
}

function addMarker(map, tb) {
	const marker = new google.maps.Marker({
    	position: getPosition(tb),
    	map: map,
    	animation: google.maps.Animation.DROP
     })
}

/***********************************************************************************
* Contract
***********************************************************************************/
async function initContract() {
	const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();
	window.contract = new ethers.Contract(CONTRACT.ADDRESS, CONTRACT.ABI, signer)
	window.tb = new ethers.Contract(TB_CONTRACT.ADDRESS, TB_CONTRACT.ABI, signer)
}

/***********************************************************************************
* Wallet
***********************************************************************************/
async function registerWalletCallbacks() {
	ethereum.on('connect', (connectInfo) => {
	});
	ethereum.on('accountsChanged', (accounts) => {
		onWalletAccountChanged();
	});
}

async function onWalletConnect() {
	console.log('onWalletConnect');
	const walletChainId = await getWalletChainId();
	if (walletChainId !== window.chainId) {
		await changeNetwork(window.chainId)
		.catch(async (error) => {
			await addNetwork(NETWORKS[window.chainId])
			await changeNetwork()
		});
	}
	await initContract();
	await loadTreasureBoxes();
	await displayMap();
	updateView();
}

async function onWalletDisconnect() {
	console.log('onWalletDisconnect');
	updateView();
}

function onWalletAccountChanged() {
	if (ethereum.selectedAddress) {
		onWalletConnect();
	} else {
		onWalletDisconnect();
	}
}

async function getWalletChainId() {
	return await window.ethereum.request({method: 'eth_chainId'});
}

async function changeNetwork(chainId) {
	await window.ethereum.request({
		method: 'wallet_switchEthereumChain',
		params: [{ chainId: chainId }]
	});
}

async function addNetwork(network) {
	await window.ethereum.request({
			method: 'wallet_addEthereumChain',
			params: network
	})	
}

function onClickOpenMetaMaskApp() {
	const url = `https://metamask.app.link/dapp/${location.hostname}${location.pathname}${location.search}`;
	location.href = url;
}


/***********************************************************************************
* User Action
***********************************************************************************/
async function onClickButtonConnectWallet() {
	console.log('onClickButtonConnectWallet');
	if (typeof window.ethereum === 'undefined') {
		if (window.confirm("Open Discov3r in the MetaMask app?")) {
 			onClickOpenMetaMaskApp();
 			return
		}
		alert("MetaMask should be installed.");
	}
	const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	window.account = accounts[0];
	if (window.account) {
		onWalletConnect();
	}
}

/***********************************************************************************
* Initialization
***********************************************************************************/
async function init() {
	initWithOptions();
	initUI();
	initWeb3();
}

async function initWithOptions() {
	window.chainId = getChainId(getUrlParam('c'));
	window.tbId = getUrlParam('t');
	window.key = getUrlParam('k');
	window.uuid = getUrlParam('u');
}

async function initUI() {
	$('#button-connect-wallet').on('click', onClickButtonConnectWallet);
	$('#button-test').on('click', onClickButtonTest);
}

async function initWeb3() {
	if (typeof window.ethereum === 'undefined') {
 		return;
	}
	await ethereum.request({ method: 'eth_accounts' })
	registerWalletCallbacks();
	onWalletAccountChanged();
}

/***********************************************************************************
* Test
***********************************************************************************/
async function onClickButtonTest() {
	console.log(window.tbId)
	console.log(window.key)
	console.log(window.uuid)

	const tx = await window.contract.unlockTreasureBox(
		window.tbId,
		window.uuid
	)
	console.log(tx)
}

/***********************************************************************************
* OnReady
***********************************************************************************/
$(()=> {
	init();
})
