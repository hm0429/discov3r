(()=>{const e=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"bytes",name:"signature",type:"bytes"}],name:"createAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"latitude",type:"string"},{internalType:"string",name:"longitude",type:"string"},{internalType:"bytes32",name:"keyHash",type:"bytes32"}],name:"createTreasure",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"treasureId",type:"uint256"},{internalType:"string",name:"key",type:"string"}],name:"discover",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_address",type:"address"}],name:"setTreasureBoxContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"signer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"treasureBox",outputs:[{internalType:"contractTreasureBox",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"treasureId",type:"uint256"},{internalType:"string",name:"uuid",type:"string"}],name:"unlockTreasureBox",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"verified",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],t={"0x89":[{chainId:"0x89",chainName:"Polygon",rpcUrls:["https://polygon-rpc.com/"],nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},blockExplorerUrls:["https://polygonscan.com/"]}],"0x13881":[{chainId:"0x13881",chainName:"Mumbai",rpcUrls:["https://rpc-mumbai.matic.today/"],nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},blockExplorerUrls:["https://mumbai.polygonscan.com/"]}]},n=e=>{e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?null:decodeURIComponent(t[1].replace(/\+/g," "))};function a(){ethereum.selectedAddress?($("#address-label").text(ethereum.selectedAddress.substr(0,5)+"..."+ethereum.selectedAddress.slice(-4)),$(".only-logout").hide(),$(".only-login").show()):($("#address-label").text(""),$(".only-logout").show(),$(".only-login").hide())}async function o(){console.log("onWalletConnect"),await async function(){return await window.ethereum.request({method:"eth_chainId"})}()!==window.chainId&&await s(window.chainId).catch((async e=>{await async function(e){await window.ethereum.request({method:"wallet_addEthereumChain",params:e})}(t[window.chainId]),await s()})),async function(){const t=new ethers.providers.Web3Provider(window.ethereum,"any");await t.send("eth_requestAccounts",[]);const n=t.getSigner();window.contract=new ethers.Contract("0x8204F84b07A20BF96C16703892DC816C27554f44",e,n)}(),a()}function i(){ethereum.selectedAddress?o():async function(){console.log("onWalletDisconnect"),a()}()}async function s(e){await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:e}]})}async function r(){if(console.log("onClickButtonConnectWallet"),void 0===window.ethereum){if(window.confirm("Open Discov3r in the MetaMask app?"))return void function(){const e=`https://metamask.app.link/dapp/${location.hostname}${location.pathname}${location.search}`;location.href=e}();alert("MetaMask should be installed.")}const e=await ethereum.request({method:"eth_requestAccounts"});window.account=e[0],window.account&&o()}async function u(){console.log(window.treasureId),console.log(window.key),console.log(window.uuid);const e=await window.contract.unlockTreasureBox(window.treasureId,window.uuid);console.log(e)}$((()=>{!async function(){!async function(){window.chainId="polygon"===n("c")?"0x89":"0x13881",window.treasureId=n("t"),window.key=n("k"),window.uuid=n("u")}(),async function(){$("#button-connect-wallet").on("click",r),$("#button-test").on("click",u)}(),async function(){void 0!==window.ethereum&&(await ethereum.request({method:"eth_accounts"}),async function(){ethereum.on("connect",(e=>{})),ethereum.on("accountsChanged",(e=>{i()}))}(),i())}()}()}))})();