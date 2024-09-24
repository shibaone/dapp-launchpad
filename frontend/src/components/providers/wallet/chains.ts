import { mainnet, goerli, polygon, polygonMumbai, polygonZkEvm, polygonZkEvmTestnet } from 'wagmi/chains';
import { Chain } from 'wagmi';

const hardhat: Chain = {
    id: 31337,
    name: 'Hardhat',
    network: 'localhost',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        public: { http: ['http://127.0.0.1:8545'] },
        default: { http: ['http://127.0.0.1:8545'] },
    }
}

const puppynet = {
    id: 157,
    name: 'Puppynet',
    network: 'Puppynet',
    nativeCurrency: {
        decimals: 18,
        name: 'BONE',
        symbol: 'BONE',
    },
    rpcUrls: {
        public: { http: ['https://puppynet.shibrpc.com'] },
        default: { http: ['https://puppynet.shibrpc.com'] },
    }
}

const shibarium = {
    id: 109,
    name: 'Shibarium',
    network: 'Shibarium',
    nativeCurrency: {
        decimals: 18,
        name: 'BONE',
        symbol: 'BONE',
    },
    rpcUrls: {
        public: { http: ['https://www.shibrpc.com'] },
        default: { http: ['https://www.shibrpc.com'] },
    }
}

export const supportedChains = [
    hardhat,
    puppynet,
    shibarium,
    mainnet,
    goerli,
    polygon,
    polygonMumbai,
    polygonZkEvm,
    polygonZkEvmTestnet
]
