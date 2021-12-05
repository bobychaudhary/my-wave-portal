const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
 const [owner, randomPerson]=await hre.ethers.getSigners();
  await waveContract.deployed();
  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount=await waveContract.getTotalWaves();

  let waveTxn=await waveContract.wave();
  await waveTxn.wait();

  waveCount=await waveContract.getTotalWaves();

};
const runMain=async()=>{
    try{
        await main();
        process.exit(0);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
    };
runMain();