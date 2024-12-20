// Get contract address from environment variable
export const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

if (!CONTRACT_ADDRESS) {
  throw new Error("Contract address not found in environment variables");
}

export const CONTRACT_ABI = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "fallback",
    stateMutability: "payable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "GRID_WIDTH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "NUMBER_OF_GAMES",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allBoards",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct Game[]",
        components: [
          {
            name: "gameIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "boardIndex",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "lastPlayedColumn",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "numberOfPlays",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "isClosed",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "winners",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "gridDiscs",
            type: "bool[][]",
            internalType: "bool[][]",
          },
          {
            name: "gridAddresses",
            type: "address[][]",
            internalType: "address[][]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "boards",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "contributionPerPlayByBoardIndex",
    inputs: [
      {
        name: "boardIndex",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "gameByBoardIndex",
    inputs: [
      {
        name: "boardIndex",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct Game",
        components: [
          {
            name: "gameIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "boardIndex",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "lastPlayedColumn",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "numberOfPlays",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "isClosed",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "winners",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "gridDiscs",
            type: "bool[][]",
            internalType: "bool[][]",
          },
          {
            name: "gridAddresses",
            type: "address[][]",
            internalType: "address[][]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "gameByGameIndex",
    inputs: [
      {
        name: "gameIndex",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct Game",
        components: [
          {
            name: "gameIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "boardIndex",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "lastPlayedColumn",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "numberOfPlays",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "isClosed",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "winners",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "gridDiscs",
            type: "bool[][]",
            internalType: "bool[][]",
          },
          {
            name: "gridAddresses",
            type: "address[][]",
            internalType: "address[][]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "gamesLength",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isColumnFree",
    inputs: [
      {
        name: "gameIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "columnIndex",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isTornDown",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "play",
    inputs: [
      {
        name: "boardIndex",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "column",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "tearDown",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "GameClosed",
    inputs: [
      {
        name: "gameIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "boardIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "GameCreated",
    inputs: [
      {
        name: "gameIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "boardIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "GamePlayed",
    inputs: [
      {
        name: "gameIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "boardIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "column",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "numberOfPlays",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TornDown",
    inputs: [
      {
        name: "tornDownBy",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
];

// Provider configuration
export const NETWORK_CONFIG = {
  mainnet: {
    name: "Ethereum Mainnet",
    rpcUrl: "https://eth-mainnet.g.alchemy.com/v2/your-api-key",
  },
  sepolia: {
    name: "Sepolia Testnet",
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/your-api-key",
  },
  local: {
    name: "Local anvil",
    rpcUrl: "http://localhost:8545",
  },
  dev: {
    name: "Remote anvil",
    rpcUrl: "https://anvil.idm.io",
  },
} as const;
