import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
  const [deployer] = await ethers.getSigners();
  console.log('deploy from address: ', deployer.getAddress());

  // const Floppy = await ethers.getContractFactory("Floppy");
  // const floppy = await Floppy.deploy();
  // const floopyAddress = await floppy.getAddress()
  // console.log('Floppy address: ', floppyAddress);
  // Config.setConfig(network + '.Floppy', floopyAddress);

  // const Vault = await ethers.getContractFactory("Vault");
  // const vault = await Vault.deploy();
  // const vaultAddress = await vault.getAddress()
  // console.log('Floppy address: ', vaultAddress);
  // Config.setConfig(network + '.Vault', vaultAddress);

  // const Hero = await ethers.getContractFactory("Hero");
  // const hero = await Hero.deploy();
  // const heroAddress = await hero.getAddress()
  // console.log('stman hero address: ', heroAddress);
  // Config.setConfig(network + '.Hero', heroAddress);

  // const MKP = await ethers.getContractFactory("HeroMarketplace");
  // const heroMarketplace = await MKP.deploy("0x038F556b3E9B5D16f792cB670263105d0eaf7E28", "0xcDc11cE81E70437098B31d0695ECA69AF16E8714");
  // const heroMarketplaceAddress = await heroMarketplace.getAddress()
  // console.log('Market deployed at: ', heroMarketplaceAddress);
  // Config.setConfig(network + '.HeroMarketplace', heroMarketplaceAddress);

  await Config.updateConfig()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
