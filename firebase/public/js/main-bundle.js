(()=>{const e="https://us-central1-discov3r.cloudfunctions.net",t=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"bytes",name:"signature",type:"bytes"}],name:"createAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"latitude",type:"string"},{internalType:"string",name:"longitude",type:"string"},{internalType:"bytes32",name:"keyHash",type:"bytes32"}],name:"createTreasure",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"treasureId",type:"uint256"},{internalType:"string",name:"key",type:"string"}],name:"discover",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_address",type:"address"}],name:"setTreasureBoxContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"signer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"treasureBox",outputs:[{internalType:"contractTreasureBox",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"treasureId",type:"uint256"},{internalType:"string",name:"uuid",type:"string"}],name:"unlockTreasureBox",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"verified",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],n=[{inputs:[{internalType:"address",name:"main",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAIN_CONTRACT_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"didDiscover",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"exists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getTreasure",outputs:[{components:[{internalType:"address",name:"creator",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"latitude",type:"string"},{internalType:"string",name:"longitude",type:"string"},{internalType:"bytes32",name:"keyHash",type:"bytes32"},{internalType:"enumITreasure.TreasureType",name:"treasureType",type:"uint8"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bool",name:"isDiscovered",type:"bool"}],internalType:"structITreasure.Treasure",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"address",name:"creator",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"latitude",type:"string"},{internalType:"string",name:"longitude",type:"string"},{internalType:"bytes32",name:"keyHash",type:"bytes32"},{internalType:"enumITreasure.TreasureType",name:"treasureType",type:"uint8"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bool",name:"isDiscovered",type:"bool"}],internalType:"structITreasure.Treasure",name:"treasure",type:"tuple"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"treasures",outputs:[{internalType:"address",name:"creator",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"latitude",type:"string"},{internalType:"string",name:"longitude",type:"string"},{internalType:"bytes32",name:"keyHash",type:"bytes32"},{internalType:"enumITreasure.TreasureType",name:"treasureType",type:"uint8"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bool",name:"isDiscovered",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],a={"0x89":[{chainId:"0x89",chainName:"Polygon",rpcUrls:["https://polygon-rpc.com/"],nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},blockExplorerUrls:["https://polygonscan.com/"]}],"0x13881":[{chainId:"0x13881",chainName:"Mumbai",rpcUrls:["https://rpc-mumbai.matic.today/"],nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},blockExplorerUrls:["https://mumbai.polygonscan.com/"]}]},i=e=>{e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?null:decodeURIComponent(t[1].replace(/\+/g," "))};function s(){$("#loading ,#spinner").height($(window).height()).css("display","block")}function r(){$("#loading ,#spinner").height($(window).height()).css("display","none")}async function o(){ethereum.selectedAddress?($("#address-label").text(ethereum.selectedAddress.substr(0,5)+"..."+ethereum.selectedAddress.slice(-4)),$(".only-logout").hide(),$(".only-login").show(),await async function(){return await window.contract.verified(ethereum.selectedAddress)}()?($("#address-label").text("✅ "+$("#address-label").text()),$("#button-create-account-modal").hide()):$("#button-create-account-modal").show()):($("#address-label").text(""),$(".only-logout").show(),$(".only-login").hide())}function p(e){return{lat:parseFloat(e.latitude),lng:parseFloat(e.longitude)}}async function y(){const e=new ethers.providers.Web3Provider(window.ethereum,"any");return await e.send("eth_requestAccounts",[]),e.getSigner()}async function u(){console.log("onWalletConnect"),await async function(){return await window.ethereum.request({method:"eth_chainId"})}()!==window.chainId&&await d(window.chainId).catch((async e=>{await async function(e){await window.ethereum.request({method:"wallet_addEthereumChain",params:e})}(a[window.chainId]),await d()})),await async function(){const e=await y();window.contract=new ethers.Contract("0x8204F84b07A20BF96C16703892DC816C27554f44",t,e),window.tb=new ethers.Contract("0xc76a18b0ae5afde5be697595d8cf1ccbb28c7d99",n,e)}(),await async function(){const e=(await window.tb.totalSupply()).toNumber();window.tbs=[];for(let t=0;t<=e;t++){const e=await window.tb.treasures(t);tbs.push({...e,id:t})}}(),await void(window.tbs.length<1||(window.map=new google.maps.Map(document.getElementById("map"),{zoom:12,center:{lat:37.8029308,lng:-122.4484231}}),window.tbs.forEach(((e,t)=>{e.latitude&&e.longitude&&function(e,t){new google.maps.Marker({position:p(t),map:e,animation:google.maps.Animation.DROP})}(window.map,e)})),$("#map-container").show())),await async function(){worldID.init("world-id-container",{debug:!0,enable_telemetry:!0,action_id:"wid_staging_0fa2dbde7735834e560fb5ad13146f0c",signal:ethereum.selectedAddress,on_success:e=>{console.log(e),window.worldIdProof=e},on_error:e=>console.error(e)})}(),o(),r()}async function d(e){await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:e}]})}async function l(){if(console.log("onClickButtonConnectWallet"),void 0===window.ethereum){if(window.confirm("Open Discov3r in the MetaMask app?"))return void function(){const e=`https://metamask.app.link/dapp/${location.hostname}${location.pathname}${location.search}`;location.href=e}();alert("MetaMask should be installed.")}s(),(await ethereum.request({method:"eth_requestAccounts"}))[0]&&u()}async function c(){window.worldIdProof||(window.worldIdProof="dummy"),s();const t=(await async function(t){return n=`${e}/challenge?address=${t}`,new Promise(((e,t)=>{$.ajax({url:n,type:"GET",async:!0,contentType:"application/json",dataType:"json"}).then((t=>e(t)),(e=>t(e)))}));var n}(ethereum.selectedAddress)).challenge;console.log(t);const n=ethers.utils.solidityKeccak256(["string"],[t]),a=await y(),i=await a.signMessage(ethers.utils.arrayify(n));console.log(i);const o=(await async function(t,n){const a=`${e}/signature`;return new Promise(((e,i)=>{$.ajax({url:a,data:JSON.stringify({address:t,signature:n,worldIdProof:window.worldIdProof}),type:"POST",async:!0,contentType:"application/json",dataType:"json"}).then((t=>e(t)),(e=>i(e)))}))}(ethereum.selectedAddress,i)).signature;console.log(o);const p=await window.contract.createAccount(o);console.log(p),r()}async function m(){!async function(){window.chainId="polygon"===i("c")?"0x89":"0x13881",window.tbId=i("t"),window.key=i("k"),window.uuid=i("u")}(),async function(){$("#button-connect-wallet").on("click",l),$("#button-test").on("click",w),$("#button-create-account").on("click",c)}(),async function(){void 0!==window.ethereum&&(await ethereum.request({method:"eth_accounts"}),async function(){ethereum.on("connect",(e=>{})),ethereum.on("accountsChanged",(e=>{ethereum.selectedAddress?u():async function(){console.log("onWalletDisconnect"),o()}()}))}())}()}async function w(){console.log(window.tbId),console.log(window.key),console.log(window.uuid);const e=await window.contract.unlockTreasureBox(window.tbId,window.uuid);console.log(e)}$((()=>{m()}))})();