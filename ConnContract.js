import { ethers } from './ethers.main.js';

const getContract = async (CONTRACT_ADDRESS) => {
	// const contractAddress = '0x0A24174957D767778B3cD0e9F53Ed04163FBe5A2';
	const contractAddress = CONTRACT_ADDRESS;
	const abi = await (await fetch('Abi.json')).json();
	console.log('abi:', abi);
	const provider = new ethers.providers.Web3Provider(window.ethereum);

	const signer = provider.getSigner();
	const contract = new ethers.Contract(contractAddress, abi, signer);

	return contract;
	// return null;
};

export default getContract;
