const MultiSigWallet = artifacts.require("MultiSigWallet");

module.exports = function (deployer) {
    const owners = ["0x5C0149F00AeE68700A39426f92F92093A0FeCdAb", "0xCE604a4737970fA0D76FFBd7edD0f8E79AD727ee"]; 
    const required = 2; // Number of confirmations required
    deployer.deploy(MultiSigWallet, owners, required);
};
// const MultiSigWallet = artifacts.require("MultiSigWallet");
// // const Transaction = artifacts.require("Transaction");


// // module.exports = async function (deployer) {
// //     await deployer.deploy(Transaction);
// //     const transactionInstance = await Transaction.deployed();
// //     console.log("Transaction Contract deployed at:", transactionInstance.address);
// // };

// await deployer.deploy(MultiSigWallet, owners, 2, transactionInstance.address);
//     console.log("MultiSigWallet deployed at:", (await MultiSigWallet.deployed()).address);

// module.exports = function (deployer) {
//     const owners = ["0x5C0149F00AeE68700A39426f92F92093A0FeCdAb", "0xCE604a4737970fA0D76FFBd7edD0f8E79AD727ee"]; 

//     const required = 2; // Number of confirmations required
//     deployer.deploy(MultiSigWallet, owners, required);

    
// };

