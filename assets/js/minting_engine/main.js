// SHAHID AHMED
window.mobileAndTabletCheck = function() {
	let check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};
let chainID, NFTname, totalSupply, balanceOf, maxTx, maxTxWL, methods, contract, walletbalance, currentSale, limit_per_session = '';
let accounts 					= [];
let proofhash 					= [];
//const allowed_chain 			= [1]; // LIVE ETH
const allowed_chain 			= [4]; // TEST ETH
const ADDRESS 					= '0x79141aa39Cc53cc009EdF72791179cebeB1cB099';
const ABI 						= [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"burnMany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"legendarySupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"presale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pricePerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"promoMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"promoTokensMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"publicsale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleState","outputs":[{"internalType":"enum KaijuKongz.SaleState","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"burnerAddress","type":"address"}],"name":"setBurnerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"newRootGroup1","type":"bytes32"},{"internalType":"bytes32","name":"newRootGroup2","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum KaijuKongz.SaleState","name":"newState","type":"uint8"}],"name":"setSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"tradeState","type":"bool"}],"name":"setTradeState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensBurned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradeActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const BUTTONACTION 				= $('body #connect_wallet');
const WalletConnect             = window.WalletConnect.default;
const WalletConnectQRCodeModal  = window.WalletConnectQRCodeModal.default;
const WalletConnectProvider     = window.WalletConnectProvider.default;
const keccak256      			= window.keccak256;

var whitelist1 = [
	"0xbcD70b7436A0EDF418A0E350610F25fe12d2223C",
	"0xC7922EF4fF72cBCeF878C78323Ba80f837d87d90",
	"0x0E31e4dbeE13f78423e792b1DF3e26CE5D46CCf4",
];

var whitelist2 = [
	"0x0E31e4dbeE13f78423e792b1DF3e26CE5D46CCf4"
];

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(window['ethereum']);
}

async function initApp() {
  if( typeof(accounts[0]) !== 'undefined' ){
	  enable_web3();
	  $('body #connect_wallet').attr('data-action', 'mint').html('Mint');
  }else{
	  $('body #connect_wallet').attr('data-action', 'notconnected');
  }
}

function MG1(){
	const leaves = whitelist1.map(x => keccak256(x));
	const tree = new MerkleTree(leaves, keccak256);
	const root = tree.getRoot().toString('hex');
	const leaf = keccak256(accounts[0]);
	const proof = tree.getProof(leaf);
	return tree.verify(proof, leaf, root);
}
function MG1_proof(){
	const leaves = whitelist1.map(x => keccak256(x));
	const tree = new MerkleTree(leaves, keccak256);
	const root = tree.getRoot().toString('hex');
	const leaf = keccak256(accounts[0]);
	const hexProof = tree.getHexProof(leaf);
	return hexProof;
}

function MG2(){
	const leaves = whitelist1.map(x => keccak256(x));
	const tree = new MerkleTree(leaves, keccak256);
	const root = tree.getRoot().toString('hex');
	const leaf = keccak256(accounts[0]);
	const proof = tree.getProof(leaf);
	return tree.verify(proof, leaf, root);
}
function MG2_proof(){
	const leaves = whitelist2.map(x => keccak256(x));
	const tree = new MerkleTree(leaves, keccak256);
	const root = tree.getRoot().toString('hex');
	const leaf = keccak256(accounts[0]);
	const hexProof = tree.getHexProof(leaf);
	return hexProof;
}

// ENABLE WEB3
async function enable_web3(){

	startloader('Loading...');

  	accounts    = await new web3.eth.getAccounts();
  	chainID     = await new web3.eth.getChainId()
  	contract    = await new web3.eth.Contract(ABI, ADDRESS);
  	methods     = contract.methods;
  
  	if(accounts[0] != '' && typeof accounts[0] !== 'undefined'){
  
	  	if( jQuery.inArray( chainID, allowed_chain ) !== -1 ){
		  	await internal_funcs();
		  	if(currentSale !== 'Not Active Yet'){
                if( MG1() === true){
                    BUTTONACTION.attr('data-action', 'mint').html('Mint').prop('disabled', false);
					$('.update-btn.increment button').prop('disabled', false);
					$('.update-btn.decrement button').prop('disabled', false);	
					limit_per_session = 1;
					proofhash = MG1_proof();
                }else if( MG2() === true){
                    BUTTONACTION.attr('data-action', 'mint').html('Mint').prop('disabled', false);
					$('.update-btn.increment button').prop('disabled', false);
					$('.update-btn.decrement button').prop('disabled', false);	
					limit_per_session = 2;
					proofhash = MG2_proof();
                }else{
                    BUTTONACTION.attr('data-action', 'notwl').html('Account not WL').prop('disabled', false);
					$('.update-btn.increment button').prop('disabled', true);
					$('.update-btn.decrement button').prop('disabled', true);	
					limit_per_session = 0;
					proofhash = [];
                }
			}else{
				BUTTONACTION.attr('data-action', 'salefale').html('Sale Not Yet Started').prop('disabled', false);
				$('.update-btn.increment button').prop('disabled', true);
				$('.update-btn.decrement button').prop('disabled', true);	
				limit_per_session = 0;
				proofhash = [];
			}
	  	}else{
		  $('body #connect_wallet').attr('data-action', 'changenetwork').html('Change network to Mainnet').prop('disabled', false);
		  $('.update-btn.increment button').prop('disabled', true);
		  $('.update-btn.decrement button').prop('disabled', true);	
		  limit_per_session = 0;
	  	}
  
  	}

  	stoploader();

}
// ENABLE WEB3

// CHANGE TO MAIN
async function changeToMain(){
  await ethereum.request({
	  method: 'wallet_switchEthereumChain',
	  //params: [{ chainId: '0x1' }], //MAIN ETH
	  params: [{ chainId: '0x4' }], // TEST ETH
	});
}
// CHANGE TO MAIN

// INTERNAL
async function internal_funcs(){
  
	$('.currentAddress').html(accounts[0]);
  
  	$('.qty').html('0');

  	await web3.eth.getBalance(accounts[0], function(err, result) {
		walletbalance = web3.utils.fromWei(result, "ether");
  	});
  
	await methods.saleState().call(function(error, result){
		if(result === '1'){
			currentSale = 'Whitelist';
		}else{
			currentSale = 'Not Active Yet';
		}
  	});
	
  	await methods.totalSupply().call(function(error, results){
	  	nonce = results;
	  	$('.nonce').html(nonce);
  	});

  	await methods.maxTotalSupply().call(function(error, result){
		totalSupply = result;
		$('.maxTotalSupply').html(totalSupply);
  	});
	
  	await methods.pricePerToken().call(function(error, result){
		price = result;
		price = web3.utils.fromWei(price, 'ether');
		$('.pricePerToken').html(price);
		limit_per_session = maxTx;
  	});

  	window.setInterval(function(){

		methods.totalSupply().call(function(error, results){
			nonce = results;
			$('.nonce').html(nonce);
		});

  	}, 1000);

}
// INTERNAL

function setChain(chain_id){
  chainID = chain_id;
  initApp();
}

function setAddress(account){
  accounts = account;
  initApp();
}

function mint(nfts){
  return new Promise(function (resolve, reject){
		var total = (price * nfts);
		if(currentSale == 'Whitelist'){
			console.log(nfts, proofhash);
			methods.presale(nfts, proofhash).send({
				maxPriorityFeePerGas: null,
				maxFeePerGas: null,
				from:   accounts[0],
				value:  web3.utils.toWei( total.toString() , "ether")
			}).then(function(result, error){
				console.log(error);
				if (error) {
					reject(error);
				} else {
					resolve(result);
				}
			}).catch(function(error){
				console.log(error);
				reject(error);
			});
		}
  });
}

function startloader(_text){
  $('#connect_wallet').prop('disabled', true);
  $('.loader_text').html(_text);
  $('.loader').show();
}
function stoploader(){
  setTimeout( function(){
	  $('#connect_wallet').prop('disabled', false);
	  $('.loader').hide();
	}  , 1000 );
}

$(document).ready(async function(){

  if(window.ethereum){
	  accounts    = await new web3.eth.getAccounts();
	  initApp();
	  window.ethereum.on('networkChanged', function (networkId) {
		  setChain(networkId);
	  });
	  window.ethereum.on('accountsChanged', function (accounts) {
		  setAddress(accounts);
	  });
  }else if(!window.ethereum){
	  initApp();
  }else{
	  initApp();
  }

  $('.update-btn.decrement button').on('click', function(){
	  if( typeof(accounts[0]) !== 'undefined' ){
			 let currValue = parseInt($('.qty').html());
			 if( currValue > 0 ) {
				 currValue = currValue - 1;
			 }
			 $('.qty').html(currValue);
		  totaleths(currValue);
	  }
  });

  $('.update-btn.increment button').on('click', function(){
	  if( typeof(accounts[0]) !== 'undefined' ){
		  let currValue = parseInt($('.qty').html());
		  if( currValue < (limit_per_session) ) {
			  currValue = currValue + 1;
		  }
		  $('.qty').html(currValue);
		  totaleths(currValue);
	  }
  });
  
  $('body #connect_wallet').click(async function(){
	  var button_action = $('body #connect_wallet').attr("data-action");
  
	  if( button_action == 'notconnected' ){
		  if(!window.ethereum){
			  connect_mobile();
		  }else{
			  accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  if( accounts.length > 0 ){
				  $('body #connect_wallet').html('Mint').attr("data-action", "mint");
				  enable_web3();
			  }
		  }
	  }else if( button_action == 'changenetwork' ){
		  changeToMain();
	  }else if( button_action == 'mint' ){
		  var NFTs = $('.qty').html();
		  if(NFTs > 0){
			  startloader('Minting...');
			  mint(NFTs)
			  .then(function(result){
				  startloader('Mint Succeed.');
				  stoploader();
			  })
			  .catch(function(error){
				  startloader('Mint Failed.');
				  stoploader();
			  });
		  }
	  }
  });

});

function totaleths(qty){
  var total = (qty * price);
  if(total > walletbalance){
	  $('body #connect_wallet').attr('data-action', 'notenough').html('Insufficient funds').prop('disabled', true);
  }else{
	  $('body #connect_wallet').attr('data-action', 'mint').html('Mint').prop('disabled', false);
  }
}


window.addEventListener('DOMContentLoaded', (event) => {
  
	// Get an instance of the WalletConnect connector
	var walletConnector = new WalletConnectProvider({
	  bridge: 'https://bridge.walletconnect.org',
	  infuraId: 'a611586674b947fd83720754c34cb835',
	  qrcodeModalOptions: {
		  mobileLinks: [
			  "rainbow",
			  "trust",
			  "argent",
			  "metamask",
			  "pillar",
			  "imtoken",
			  "bitpay",
			  "crypto",
			  "mathwallet",
			  "tokenpocket",
			  "onto",
			]
	  }
	});
  
	connect_mobile = async function () {
	  await walletConnector.enable();
	  web3 = new Web3(walletConnector);
	  enable_web3();
  
	  walletConnector.on("chainChanged", (chainId) => {
		  setChain(chainId);
	  });

	  walletConnector.on("accountsChanged", (account) => {
		  setAddress(account);
	  });
  }

});