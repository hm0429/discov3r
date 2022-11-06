/***********************************************************************************
* constants
***********************************************************************************/
const API_ENDPOINT = "https://us-central1-discov3r.cloudfunctions.net"

const CONTRACT = {
	ADDRESS: "0xE644dA4785d4a0632ea4815699648bf810412AE4",
	OPT_ADDRESS: "0x8D38A12789fa996639f2535F2D4a0BE1235463b8",
	ABI: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"createAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"latitude","type":"string"},{"internalType":"string","name":"longitude","type":"string"},{"internalType":"bytes32","name":"keyHash","type":"bytes32"}],"name":"createTreasure","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"latitude","type":"string"},{"internalType":"string","name":"longitude","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"keyHash","type":"bytes32"}],"name":"createTreasureERC20","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"latitude","type":"string"},{"internalType":"string","name":"longitude","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes32","name":"keyHash","type":"bytes32"}],"name":"createTreasureERC721","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"treasureId","type":"uint256"},{"internalType":"string","name":"key","type":"string"}],"name":"discover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setTreasureBoxContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasureBox","outputs":[{"internalType":"contractTreasureBox","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"treasureId","type":"uint256"},{"internalType":"string","name":"uuid","type":"string"}],"name":"unlockTreasureBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"verified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
}

const TB_CONTRACT = {
	ADDRESS: "0x6f3282a794DbD109431e9985A67D7c5dcBFdd7c5",
	OPT_ADDRESS: "0x2Dde8A988780B3229Ba6347e1f38583d9AE0037A",
	ABI: [{"inputs":[{"internalType":"address","name":"main","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAIN_CONTRACT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"didDiscover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTreasure","outputs":[{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"latitude","type":"string"},{"internalType":"string","name":"longitude","type":"string"},{"internalType":"bytes32","name":"keyHash","type":"bytes32"},{"internalType":"enumITreasure.TreasureType","name":"treasureType","type":"uint8"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bool","name":"isDiscovered","type":"bool"}],"internalType":"structITreasure.Treasure","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"latitude","type":"string"},{"internalType":"string","name":"longitude","type":"string"},{"internalType":"bytes32","name":"keyHash","type":"bytes32"},{"internalType":"enumITreasure.TreasureType","name":"treasureType","type":"uint8"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bool","name":"isDiscovered","type":"bool"}],"internalType":"structITreasure.Treasure","name":"treasure","type":"tuple"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"treasures","outputs":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"latitude","type":"string"},{"internalType":"string","name":"longitude","type":"string"},{"internalType":"bytes32","name":"keyHash","type":"bytes32"},{"internalType":"enumITreasure.TreasureType","name":"treasureType","type":"uint8"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bool","name":"isDiscovered","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
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
	}],
	'0x1A4': [{
		chainId: '0x1A4',
		chainName: 'Optimsim Goerli',
		rpcUrls: ['https://goerli.optimism.io/'],
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18
		},
		blockExplorerUrls: ['https://goerli-explorer.optimism.io']		
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
		case 'optimism':
			return '0x1A4';
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

async function updateView() {
	const isWalletConnected = ethereum.selectedAddress ? true : false;
	if (isWalletConnected) {
		$('#address-label').text(ethereum.selectedAddress.substr(0, 5) + '...' + ethereum.selectedAddress.slice(-4));
		$('.only-logout').hide();
		$('.only-login').show();
		if(await isVerifiedAccount()) {
			$('#address-label').text('✅ ' + $('#address-label').text());
			$('#button-create-account-modal').hide();
			$('#button-create-tb-modal').show();
		} else {
			$('#button-create-account-modal').show();
			$('#button-create-tb-modal').hide();
		}

		if (window.tbId && window.key) {
			$('#d-id').val(tbId);
			$('#d-key').val(key);
			const tb = window.tbs[tbId];
			$('#d-name').val(tb.name);
			$('#d-amount').val(ethers.utils.formatEther(tb.amount));
			$('#d-discovered').val(tb.isDiscovered);
			$('#modal-discover').modal('show');
			if (window.uuid) {
				$('#button-unlock').show()
			} else {
				$('#button-unlock').hide()
			}
		}

	} else {
		$('#address-label').text('');
		$('.only-logout').show();
		$('.only-login').hide();
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
	$('#map-container').show()
}

function getPosition(tb) {
	return {lat: parseFloat(tb.latitude), lng: parseFloat(tb.longitude)};
}

function getInfoWindow(tb) {

  	return infoWindow
}

function addMarker(map, tb) {
	const marker = new google.maps.Marker({
    	position: getPosition(tb),
    	map: map,
    	animation: google.maps.Animation.DROP
     })

	marker.addListener('click', () => {
		const content = `
			<h3>${tb.name}</h3>
			<p>value: ${ethers.utils.formatEther(tb.amount)}</p>
			<p>isDiscovered: ${tb.isDiscovered}</p>
		`
		new google.maps.InfoWindow({
    		content: content,
  		}).open({
  			anchor: marker,
  			map
  		})
	})
}

/***********************************************************************************
* Contract
***********************************************************************************/
async function initContract() {
	const signer = await getSigner();
	var contractAddress = CONTRACT.ADDRESS;
	if (window.chainId == '0x1A4') {
		contractAddress = CONTRACT.OPT_ADDRESS;
	}
	var tbContractAddress = TB_CONTRACT.ADDRESS;
	if (window.chainId == '0x1A4') {
		tbContractAddress = TB_CONTRACT.OPT_ADDRESS;
	}
	window.contract = new ethers.Contract(contractAddress, CONTRACT.ABI, signer)
	window.tb = new ethers.Contract(tbContractAddress, TB_CONTRACT.ABI, signer)
}

async function isVerifiedAccount() {
	return await window.contract.verified(ethereum.selectedAddress)
}
/***********************************************************************************
* Wallet
***********************************************************************************/
async function getSigner() {
	const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
	await provider.send("eth_requestAccounts", []);
	return provider.getSigner();
}

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
			await changeNetwork(window.chainId)
		});
	}
	await initContract();
	await loadTreasureBoxes();
	await displayMap();
	await initWorldcoin();
	updateView();
	hideLoading();
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
* API
***********************************************************************************/

function sendGetRequest(url) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: url,
			type: "GET",
			async: true,
			contentType: "application/json",
			dataType: "json",
		}).then(
			(result) => resolve(result),
			(error) => reject(error)
	    )
	})
}

async function getChallenge(address) {
	const url = `${API_ENDPOINT}/challenge?address=${address}`
	return sendGetRequest(url)
}

async function getSignature(address, signature) {
	const url = `${API_ENDPOINT}/signature`
	return new Promise((resolve, reject) => {
		$.ajax({
			url: url,
			data: JSON.stringify({
				address: address,
				signature: signature,
				worldIdProof: window.worldIdProof
			}),
			type: "POST",
			async: true,
			contentType: "application/json",
			dataType: "json",
		}).then(
			(result) => resolve(result),
			(error) => reject(error)
	    )
	})
}

async function storeNFT(base64Image, name) {
	const url = `${API_ENDPOINT}/store`
	return new Promise((resolve, reject) => {
		$.ajax({
			url: url,
			data: JSON.stringify({
				base64Image: base64Image,
				name: name
			}),
			type: "POST",
			async: true,
			contentType: "application/json",
			dataType: "json",
		}).then(
			(result) => resolve(result),
			(error) => reject(error)
	    )
	})
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
	showLoading();
	const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	if (accounts[0]) {
		onWalletConnect();
	}
}

async function onClickCreateAccount() {

	if(!window.worldIdProof) {
		// alert("Verify with World ID first.")
		// return
		window.worldIdProof = "dummy"
	}

	showLoading();
	
	const challenge = (await getChallenge(ethereum.selectedAddress)).challenge;
	console.log(challenge);

    const message = ethers.utils.solidityKeccak256(
        ["string"], 
        [challenge]
    );
    const signer = await getSigner();
    const signature = await signer.signMessage(ethers.utils.arrayify(message));
    console.log(signature);

	const serverSignature = (await getSignature(ethereum.selectedAddress, signature)).signature;
	console.log(serverSignature);

	const tx = await window.contract.createAccount(serverSignature);
	console.log(tx)

	hideLoading();
}

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

async function onClickCreateTreasureBox() {
	const name = $('#i-name').val();
	const lat = $('#i-lat').val();
	const lon = $('#i-lon').val();
	const amount = $('#i-amount').val();
	const key = $('#i-key').val();

	const keyHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(key))
	const tx = await window.contract.createTreasure(
		name,
		"",
		lat,
		lon,
		keyHash,
		{value: ethers.utils.parseEther(amount)}
	)
	console.log(tx)
	alert(`tx sent!: ${tx.hash}`)

	// const imageFile = $('#i-image').prop('files')[0];
	// const base64Image = await blobToBase64(imageFile);

	// console.log(name)
	// console.log(base64Image)
	// const storeResult = await storeNFT(base64Image, name);
	// console.log(storeResult.url)
}

async function onClickButtonDiscover() {
	const tbId = $('#d-id').val();
	const key = $('#d-key').val();
	const tx = await window.contract.discover(
		tbId,
		key
	)
	console.log(tx)
	alert(`tx sent!: ${tx.hash}`)	
}

async function onClickButtonUnlock() {
	const tx = await window.contract.unlockTreasureBox(
		window.tbId,
		window.uuid
	)
	console.log(tx)	
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
	$('#button-create-account').on('click', onClickCreateAccount);
	$('#button-create-tb').on('click', onClickCreateTreasureBox);
	$('#button-discover').on('click', onClickButtonDiscover);
	$('#button-unlock').on('click', onClickButtonUnlock);
}

async function initWeb3() {
	if (typeof window.ethereum === 'undefined') {
 		return;
	}
	await ethereum.request({ method: 'eth_accounts' })
	registerWalletCallbacks();
	onWalletAccountChanged();
}

async function initWorldcoin() {
	worldID.init('world-id-container', {
		debug: true,
		enable_telemetry: true,
		action_id: 'wid_staging_0fa2dbde7735834e560fb5ad13146f0c',
		signal: ethereum.selectedAddress,
		on_success: (proof) => {
			console.log(proof)
			window.worldIdProof = proof
		},
		on_error: (error) => console.error(error),
	});
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
