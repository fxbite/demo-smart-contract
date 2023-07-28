import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
  const [deployer] = await ethers.getSigners();
  console.log('deploy from address: ', deployer.getAddress());


  const Floppy = await ethers.getContractFactory("Floppy");
  const floppy = await Floppy.deploy();
  console.log('Floppy address: ', floppy.getAddress());
  const floopyAddress = await floppy.getAddress()
  Config.setConfig(network + '.Floppy', floopyAddress);

  const Vault = await ethers.getContractFactory("Vault");
  const vault = await Vault.deploy();
  console.log('Floppy address: ', vault.getAddress());
  const vaultAddress = await vault.getAddress()
  Config.setConfig(network + '.Vault', vaultAddress);

  await Config.updateConfig()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
