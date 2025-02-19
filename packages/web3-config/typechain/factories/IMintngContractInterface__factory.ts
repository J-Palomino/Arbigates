/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IMintngContractInterface,
  IMintngContractInterfaceInterface,
} from "../IMintngContractInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMintngContractInterface__factory {
  static readonly abi = _abi;
  static createInterface(): IMintngContractInterfaceInterface {
    return new utils.Interface(_abi) as IMintngContractInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMintngContractInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IMintngContractInterface;
  }
}
