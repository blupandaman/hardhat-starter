import { ethers } from "hardhat";

export interface networkConfigInfo {
    [key: string]: {
        blockConfirmations?: number;
    };
}

export const networkConfig: networkConfigInfo = {
    hardhat: {
        blockConfirmations: 1,
    },
    goerli: {
        blockConfirmations: 5,
    },
};

export const developmentChains = ["hardhat", "localhost"];
