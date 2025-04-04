// networks metadata to add to EVM-based Chains list
// see: https://github.com/ethereum-lists/chains

const networksMetadata = [
  {
    chainId: 32456,
    networkId: 32456,
    name: 'Pontus-X Devnet',
    chain: 'Pontus-X',
    rpc: ['https://rpc.dev.pontus-x.eu'],
    faucets: [],
    nativeCurrency: {
      name: 'EUROe',
      symbol: 'EUROe',
      decimals: 18
    },
    infoURL: 'https://docs.pontus-x.eu',
    shortName: 'Pontus-X',
    explorers: [
      {
        name: 'Pontus-X Devnet Explorer',
        url: 'https://explorer.pontus-x.eu/devnet/pontusx',
        standard: ''
      }
    ]
  },
  {
    chainId: 32457,
    networkId: 32457,
    name: 'Pontus-X Testnet',
    chain: 'Pontus-X',
    rpc: ['https://rpc.test.pontus-x.eu'],
    faucets: [],
    nativeCurrency: {
      name: 'EUROe',
      symbol: 'EUROe',
      decimals: 18
    },
    infoURL: 'https://docs.pontus-x.eu',
    shortName: 'Pontus-X',
    explorers: [
      {
        name: 'Pontus-X Testnet Explorer',
        url: 'https://explorer.pontus-x.eu/testnet/pontusx',
        standard: ''
      }
    ]
  },
  {
    chainId: 11155111,
    networkId: 11155111,
    name: 'Sepolia Testnet',
    chain: 'Sepolia',
    rpc: ['https://eth-sepolia.g.alchemy.com/v2/demo'],
    faucets: [],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    infoURL: 'https://docs.oceanprotocol.com/discover/networks#sepolia',
    shortName: 'Sepolia',
    explorers: [
      {
        name: 'Sepolia Testnet Explorer',
        url: 'https://sepolia.etherscan.io',
        standard: ''
      }
    ]
  },
]

module.exports = {
  networksMetadata
}
