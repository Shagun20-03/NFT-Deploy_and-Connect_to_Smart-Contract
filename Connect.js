const connect = async () => {
	if (typeof window.ethereum !== 'undefined') {
		console.log('We are in!!');
		let checks = await window.ethereum.request({
			method: "wallet_requestPermissions",
			params: [
			  {
				eth_accounts: {}
			  }
			]
		  });
		return checks;
	}
	return undefined;
};

export default connect;
