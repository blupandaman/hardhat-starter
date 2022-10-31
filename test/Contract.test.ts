import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert, expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "../typechain-types"; // Enter contract name

// Replace [ contract ] with contract name
// Replace [ Contract ] with contract name

describe("Contract", function () {
  let contract: Contract;
  let deployer: SignerWithAddress;
  let otherAccount: SignerWithAddress;

  beforeEach(async () => {
    [deployer, otherAccount] = await ethers.getSigners();

    contract = await (await ethers.getContractFactory("Contract")).deploy();
  });

  describe("function", () => { // Enter function name
    it("", async () => {});
  })
})