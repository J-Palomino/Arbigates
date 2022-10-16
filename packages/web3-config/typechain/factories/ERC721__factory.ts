/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002535380380620025358339818101604052810190620000379190620002be565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b505050620003a7565b8280546200007f9062000372565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018a826200013f565b810181811067ffffffffffffffff82111715620001ac57620001ab62000150565b5b80604052505050565b6000620001c162000121565b9050620001cf82826200017f565b919050565b600067ffffffffffffffff821115620001f257620001f162000150565b5b620001fd826200013f565b9050602081019050919050565b60005b838110156200022a5780820151818401526020810190506200020d565b838111156200023a576000848401525b50505050565b6000620002576200025184620001d4565b620001b5565b9050828152602081018484840111156200027657620002756200013a565b5b620002838482856200020a565b509392505050565b600082601f830112620002a357620002a262000135565b5b8151620002b584826020860162000240565b91505092915050565b60008060408385031215620002d857620002d76200012b565b5b600083015167ffffffffffffffff811115620002f957620002f862000130565b5b62000307858286016200028b565b925050602083015167ffffffffffffffff8111156200032b576200032a62000130565b5b62000339858286016200028b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038b57607f821691505b602082108103620003a157620003a062000343565b5b50919050565b61217e80620003b76000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e991906113b7565b6102bc565b6040516100fb91906113ff565b60405180910390f35b61010c61039e565b60405161011991906114b3565b60405180910390f35b61013c6004803603810190610137919061150b565b610430565b6040516101499190611579565b60405180910390f35b61016c600480360381019061016791906115c0565b610476565b005b61018860048036038101906101839190611600565b61058d565b005b6101a4600480360381019061019f9190611600565b6105ed565b005b6101c060048036038101906101bb919061150b565b61060d565b6040516101cd9190611579565b60405180910390f35b6101f060048036038101906101eb9190611653565b6106be565b6040516101fd919061168f565b60405180910390f35b61020e610775565b60405161021b91906114b3565b60405180910390f35b61023e600480360381019061023991906116d6565b610807565b005b61025a6004803603810190610255919061184b565b61081d565b005b6102766004803603810190610271919061150b565b61087f565b60405161028391906114b3565b60405180910390f35b6102a660048036038101906102a191906118ce565b6108e7565b6040516102b391906113ff565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061039757506103968261097b565b5b9050919050565b6060600080546103ad9061193d565b80601f01602080910402602001604051908101604052809291908181526020018280546103d99061193d565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b826109e5565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104818261060d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036104f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e8906119e0565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610510610a30565b73ffffffffffffffffffffffffffffffffffffffff16148061053f575061053e81610539610a30565b6108e7565b5b61057e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057590611a72565b60405180910390fd5b6105888383610a38565b505050565b61059e610598610a30565b82610af1565b6105dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d490611b04565b60405180910390fd5b6105e8838383610b86565b505050565b6106088383836040518060200160405280600081525061081d565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ac90611b70565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361072e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072590611c02565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107849061193d565b80601f01602080910402602001604051908101604052809291908181526020018280546107b09061193d565b80156107fd5780601f106107d2576101008083540402835291602001916107fd565b820191906000526020600020905b8154815290600101906020018083116107e057829003601f168201915b5050505050905090565b610819610812610a30565b8383610dec565b5050565b61082e610828610a30565b83610af1565b61086d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086490611b04565b60405180910390fd5b61087984848484610f58565b50505050565b606061088a826109e5565b6000610894610fb4565b905060008151116108b457604051806020016040528060008152506108df565b806108be84610fcb565b6040516020016108cf929190611c5e565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6109ee8161112b565b610a2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2490611b70565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610aab8361060d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610afd8361060d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b3f5750610b3e81856108e7565b5b80610b7d57508373ffffffffffffffffffffffffffffffffffffffff16610b6584610430565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610ba68261060d565b73ffffffffffffffffffffffffffffffffffffffff1614610bfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf390611cf4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6290611d86565b60405180910390fd5b610c76838383611197565b610c81600082610a38565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cd19190611dd5565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d289190611e09565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610de783838361119c565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5190611eab565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f4b91906113ff565b60405180910390a3505050565b610f63848484610b86565b610f6f848484846111a1565b610fae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa590611f3d565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008203611012576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611126565b600082905060005b6000821461104457808061102d90611f5d565b915050600a8261103d9190611fd4565b915061101a565b60008167ffffffffffffffff8111156110605761105f611720565b5b6040519080825280601f01601f1916602001820160405280156110925781602001600182028036833780820191505090505b5090505b6000851461111f576001826110ab9190611dd5565b9150600a856110ba9190612005565b60306110c69190611e09565b60f81b8183815181106110dc576110db612036565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856111189190611fd4565b9450611096565b8093505050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006111c28473ffffffffffffffffffffffffffffffffffffffff16611328565b1561131b578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026111eb610a30565b8786866040518563ffffffff1660e01b815260040161120d94939291906120ba565b6020604051808303816000875af192505050801561124957506040513d601f19601f82011682018060405250810190611246919061211b565b60015b6112cb573d8060008114611279576040519150601f19603f3d011682016040523d82523d6000602084013e61127e565b606091505b5060008151036112c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ba90611f3d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611320565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6113948161135f565b811461139f57600080fd5b50565b6000813590506113b18161138b565b92915050565b6000602082840312156113cd576113cc611355565b5b60006113db848285016113a2565b91505092915050565b60008115159050919050565b6113f9816113e4565b82525050565b600060208201905061141460008301846113f0565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611454578082015181840152602081019050611439565b83811115611463576000848401525b50505050565b6000601f19601f8301169050919050565b60006114858261141a565b61148f8185611425565b935061149f818560208601611436565b6114a881611469565b840191505092915050565b600060208201905081810360008301526114cd818461147a565b905092915050565b6000819050919050565b6114e8816114d5565b81146114f357600080fd5b50565b600081359050611505816114df565b92915050565b60006020828403121561152157611520611355565b5b600061152f848285016114f6565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061156382611538565b9050919050565b61157381611558565b82525050565b600060208201905061158e600083018461156a565b92915050565b61159d81611558565b81146115a857600080fd5b50565b6000813590506115ba81611594565b92915050565b600080604083850312156115d7576115d6611355565b5b60006115e5858286016115ab565b92505060206115f6858286016114f6565b9150509250929050565b60008060006060848603121561161957611618611355565b5b6000611627868287016115ab565b9350506020611638868287016115ab565b9250506040611649868287016114f6565b9150509250925092565b60006020828403121561166957611668611355565b5b6000611677848285016115ab565b91505092915050565b611689816114d5565b82525050565b60006020820190506116a46000830184611680565b92915050565b6116b3816113e4565b81146116be57600080fd5b50565b6000813590506116d0816116aa565b92915050565b600080604083850312156116ed576116ec611355565b5b60006116fb858286016115ab565b925050602061170c858286016116c1565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61175882611469565b810181811067ffffffffffffffff8211171561177757611776611720565b5b80604052505050565b600061178a61134b565b9050611796828261174f565b919050565b600067ffffffffffffffff8211156117b6576117b5611720565b5b6117bf82611469565b9050602081019050919050565b82818337600083830152505050565b60006117ee6117e98461179b565b611780565b90508281526020810184848401111561180a5761180961171b565b5b6118158482856117cc565b509392505050565b600082601f83011261183257611831611716565b5b81356118428482602086016117db565b91505092915050565b6000806000806080858703121561186557611864611355565b5b6000611873878288016115ab565b9450506020611884878288016115ab565b9350506040611895878288016114f6565b925050606085013567ffffffffffffffff8111156118b6576118b561135a565b5b6118c28782880161181d565b91505092959194509250565b600080604083850312156118e5576118e4611355565b5b60006118f3858286016115ab565b9250506020611904858286016115ab565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061195557607f821691505b6020821081036119685761196761190e565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006119ca602183611425565b91506119d58261196e565b604082019050919050565b600060208201905081810360008301526119f9816119bd565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000611a5c603e83611425565b9150611a6782611a00565b604082019050919050565b60006020820190508181036000830152611a8b81611a4f565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000611aee602e83611425565b9150611af982611a92565b604082019050919050565b60006020820190508181036000830152611b1d81611ae1565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611b5a601883611425565b9150611b6582611b24565b602082019050919050565b60006020820190508181036000830152611b8981611b4d565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611bec602983611425565b9150611bf782611b90565b604082019050919050565b60006020820190508181036000830152611c1b81611bdf565b9050919050565b600081905092915050565b6000611c388261141a565b611c428185611c22565b9350611c52818560208601611436565b80840191505092915050565b6000611c6a8285611c2d565b9150611c768284611c2d565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611cde602583611425565b9150611ce982611c82565b604082019050919050565b60006020820190508181036000830152611d0d81611cd1565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611d70602483611425565b9150611d7b82611d14565b604082019050919050565b60006020820190508181036000830152611d9f81611d63565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611de0826114d5565b9150611deb836114d5565b925082821015611dfe57611dfd611da6565b5b828203905092915050565b6000611e14826114d5565b9150611e1f836114d5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611e5457611e53611da6565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000611e95601983611425565b9150611ea082611e5f565b602082019050919050565b60006020820190508181036000830152611ec481611e88565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000611f27603283611425565b9150611f3282611ecb565b604082019050919050565b60006020820190508181036000830152611f5681611f1a565b9050919050565b6000611f68826114d5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611f9a57611f99611da6565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611fdf826114d5565b9150611fea836114d5565b925082611ffa57611ff9611fa5565b5b828204905092915050565b6000612010826114d5565b915061201b836114d5565b92508261202b5761202a611fa5565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b600061208c82612065565b6120968185612070565b93506120a6818560208601611436565b6120af81611469565b840191505092915050565b60006080820190506120cf600083018761156a565b6120dc602083018661156a565b6120e96040830185611680565b81810360608301526120fb8184612081565b905095945050505050565b6000815190506121158161138b565b92915050565b60006020828403121561213157612130611355565b5b600061213f84828501612106565b9150509291505056fea26469706673582212207bacea9da9cb64813fb1f0978d371f4730a71494ffc866708d24a8e27cdfc1b764736f6c634300080e0033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly contractName: "ERC721";
  public readonly contractName: "ERC721";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
