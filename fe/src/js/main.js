/***********************************************************************************
* constants
***********************************************************************************/
const CONTRACT = {
	ADDRESS: "0x8204F84b07A20BF96C16703892DC816C27554f44",
	ABI: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"createAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"latitude","type":"string"},{"internalType":"string","name":"longitude","type":"string"},{"internalType":"bytes32","name":"keyHash","type":"bytes32"}],"name":"createTreasure","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"treasureId","type":"uint256"},{"internalType":"string","name":"key","type":"string"}],"name":"discover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setTreasureBoxContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasureBox","outputs":[{"internalType":"contractTreasureBox","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"treasureId","type":"uint256"},{"internalType":"string","name":"uuid","type":"string"}],"name":"unlockTreasureBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"verified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
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
* Contract
***********************************************************************************/
async function initContract() {
	const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();
	window.contract = new ethers.Contract(CONTRACT.ADDRESS, CONTRACT.ABI, signer)
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
			alert('Invalid chain');
		});
	}
	initContract()
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
	window.treasureId = getUrlParam('t');
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
	console.log(window.treasureId)
	console.log(window.key)
	console.log(window.uuid)

	const tx = await window.contract.unlockTreasureBox(
		window.treasureId,
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
