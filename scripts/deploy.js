const main =async()=>{
  const [deployer] = await hre.ethers.getSigners();
    const accountBalance=await deployer.getBalance();

    console.log("Deployin contracts with account: ",deployer.address);
    console.log("Account balance: ",accountBalance.toString());

    const Token=await hre.ether.getContractFactory("WavePortal");
    const portal=await Token.deply();
    await portal.deployed();

    console.log('WavePortal address: ',portal.address);
};

const runMain=async()=>{
    try{
        await main();
        process.exit(0);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
};
runMain();