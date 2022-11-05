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
	window.chainId = getChainId(getUrlParam('chain'));
}

async function initUI() {
	$('#button-connect-wallet').on('click', onClickButtonConnectWallet);
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
* OnReady
***********************************************************************************/
$(()=> {
	init();
})
