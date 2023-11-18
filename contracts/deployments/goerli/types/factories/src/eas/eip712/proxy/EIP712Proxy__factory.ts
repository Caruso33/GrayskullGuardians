/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  EIP712Proxy,
  EIP712ProxyInterface,
} from "../../../../../src/eas/eip712/proxy/EIP712Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEAS",
        name: "eas",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "DeadlineExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidEAS",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "NotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    inputs: [],
    name: "UsedSignature",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint64",
                name: "expirationTime",
                type: "uint64",
              },
              {
                internalType: "bool",
                name: "revocable",
                type: "bool",
              },
              {
                internalType: "bytes32",
                name: "refUID",
                type: "bytes32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct AttestationRequestData",
            name: "data",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct Signature",
            name: "signature",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "attester",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct DelegatedProxyAttestationRequest",
        name: "delegatedRequest",
        type: "tuple",
      },
    ],
    name: "attestByDelegation",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAttestTypeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "uid",
        type: "bytes32",
      },
    ],
    name: "getAttester",
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
    inputs: [],
    name: "getDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEAS",
    outputs: [
      {
        internalType: "contract IEAS",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getName",
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
    inputs: [],
    name: "getRevokeTypeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint64",
                name: "expirationTime",
                type: "uint64",
              },
              {
                internalType: "bool",
                name: "revocable",
                type: "bool",
              },
              {
                internalType: "bytes32",
                name: "refUID",
                type: "bytes32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct AttestationRequestData[]",
            name: "data",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "attester",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct MultiDelegatedProxyAttestationRequest[]",
        name: "multiDelegatedRequests",
        type: "tuple[]",
      },
    ],
    name: "multiAttestByDelegation",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct RevocationRequestData[]",
            name: "data",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "revoker",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct MultiDelegatedProxyRevocationRequest[]",
        name: "multiDelegatedRequests",
        type: "tuple[]",
      },
    ],
    name: "multiRevokeByDelegation",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct RevocationRequestData",
            name: "data",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct Signature",
            name: "signature",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "revoker",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct DelegatedProxyRevocationRequest",
        name: "delegatedRequest",
        type: "tuple",
      },
    ],
    name: "revokeByDelegation",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
] as const;

const _bytecode =
  "0x6101e06040523480156200001257600080fd5b5060405162002d9f38038062002d9f83398101604081905262000035916200022c565b6040805180820190915260058152640312e332e360dc1b60208201526001608052600360a052600060c0819052829190620000729083906200016b565b61018052620000838160016200016b565b6101a052815160208084019190912061014052815190820120610160524661010052620001146101405161016051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60e052505030610120526001600160a01b03821662000146576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b0382166101c052600262000162828262000396565b505050620004bc565b60006020835110156200018b576200018383620001a4565b90506200019e565b8162000198848262000396565b5060ff90505b92915050565b600080829050601f81511115620001db578260405163305a27a960e01b8152600401620001d2919062000462565b60405180910390fd5b8051620001e88262000497565b179392505050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200022357818101518382015260200162000209565b50506000910152565b600080604083850312156200024057600080fd5b82516001600160a01b03811681146200025857600080fd5b60208401519092506001600160401b03808211156200027657600080fd5b818501915085601f8301126200028b57600080fd5b815181811115620002a057620002a0620001f0565b604051601f8201601f19908116603f01168101908382118183101715620002cb57620002cb620001f0565b81604052828152886020848701011115620002e557600080fd5b620002f883602083016020880162000206565b80955050505050509250929050565b600181811c908216806200031c57607f821691505b6020821081036200033d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200039157600081815260208120601f850160051c810160208610156200036c5750805b601f850160051c820191505b818110156200038d5782815560010162000378565b5050505b505050565b81516001600160401b03811115620003b257620003b2620001f0565b620003ca81620003c3845462000307565b8462000343565b602080601f831160018114620004025760008415620003e95750858301515b600019600386901b1c1916600185901b1785556200038d565b600085815260208120601f198616915b82811015620004335788860151825594840194600190910190840162000412565b5085821015620004525787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208152600082518060208401526200048381604085016020870162000206565b601f01601f19169190910160400192915050565b805160208083015191908110156200033d5760001960209190910360031b1b16919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516128406200055f600039600081816101e4015281816104d1015281816105e901528181610a9d0152610c7e015260006107f8015260006107ce01526000611402015260006113da015260006113350152600061135f01526000611389015260006107760152600061074d0152600061072401526128406000f3fe6080604052600436106100c75760003560e01c806365c40b9c11610074578063a6d4dbc71161004e578063a6d4dbc714610250578063b83010d314610263578063ed24911d1461029657600080fd5b806365c40b9c146101d557806384b0196e14610208578063954115251461023057600080fd5b806317d7de7c116100a557806317d7de7c1461018b5780633c042715146101ad57806354fd4d50146101c057600080fd5b80630eabf660146100cc57806310d736d5146100e157806312b11a171461014e575b600080fd5b6100df6100da366004611a29565b6102ab565b005b3480156100ed57600080fd5b506101246100fc366004611a6b565b60009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561015a57600080fd5b507fea02ffba7dcb45f6fc649714d23f315eef12e3b27f9a7735d8d8bf41eb2b1af15b604051908152602001610145565b34801561019757600080fd5b506101a0610540565b6040516101459190611af2565b61017d6101bb366004611b0c565b6105d2565b3480156101cc57600080fd5b506101a061071d565b3480156101e157600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610124565b34801561021457600080fd5b5061021d6107c0565b6040516101459796959493929190611b47565b61024361023e366004611a29565b610864565b6040516101459190611c06565b6100df61025e366004611c4a565b610c65565b34801561026f57600080fd5b507f78a69a78c1a55cdff5cbf949580b410778cd9e4d1ecbe6f06a7fa8dc2441b57d61017d565b3480156102a257600080fd5b5061017d610d65565b8060008167ffffffffffffffff8111156102c7576102c7611c63565b60405190808252806020026020018201604052801561030d57816020015b6040805180820190915260008152606060208201528152602001906001900390816102e55790505b50905060005b8281101561049357600085858381811061032f5761032f611c92565b90506020028101906103419190611cc1565b61034a90611f2e565b602081015180519192509080158061036757508260400151518114155b1561039e576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156104485760008382815181106103bd576103bd611c92565b6020026020010151905061043f6040518060a0016040528087600001518152602001838152602001876040015185815181106103fb576103fb611c92565b60200260200101518152602001876060015173ffffffffffffffffffffffffffffffffffffffff168152602001876080015167ffffffffffffffff16815250610d74565b506001016103a1565b506040518060400160405280846000015181526020018381525085858151811061047457610474611c92565b602002602001018190525050505061048c8160010190565b9050610313565b506040517f4cb7e9e500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634cb7e9e5903490610508908590600401612029565b6000604051808303818588803b15801561052157600080fd5b505af1158015610535573d6000803e3d6000fd5b505050505050505050565b60606002805461054f906120f8565b80601f016020809104026020016040519081016040528092919081815260200182805461057b906120f8565b80156105c85780601f1061059d576101008083540402835291602001916105c8565b820191906000526020600020905b8154815290600101906020018083116105ab57829003601f168201915b5050505050905090565b60006105e56105e083612269565b610fd0565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f17325e73460405180604001604052808760000135815260200187806020019061064991906122e2565b61065290612316565b8152506040518363ffffffff1660e01b81526004016106719190612395565b60206040518083038185885af115801561068f573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106b491906123c2565b90506106c660c0840160a085016123db565b600082815260036020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905592915050565b60606107487f00000000000000000000000000000000000000000000000000000000000000006111b2565b6107717f00000000000000000000000000000000000000000000000000000000000000006111b2565b61079a7f00000000000000000000000000000000000000000000000000000000000000006111b2565b6040516020016107ac939291906123f6565b604051602081830303815290604052905090565b6000606080828080836107f37f000000000000000000000000000000000000000000000000000000000000000083611270565b61081e7f00000000000000000000000000000000000000000000000000000000000000006001611270565b604080516000808252602082019092527f0f000000000000000000000000000000000000000000000000000000000000009b939a50919850469750309650945092509050565b60608160008167ffffffffffffffff81111561088257610882611c63565b6040519080825280602002602001820160405280156108c857816020015b6040805180820190915260008152606060208201528152602001906001900390816108a05790505b50905060005b82811015610a9857368686838181106108e9576108e9611c92565b90506020028101906108fb9190611cc1565b905036600061090d602084018461246c565b90925090508080158061092e575061092860408501856124d4565b90508114155b15610965576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81811015610a4657610a3e6040518060a001604052808760000135815260200186868581811061099a5761099a611c92565b90506020028101906109ac91906122e2565b6109b590612316565b81526020016109c760408901896124d4565b858181106109d7576109d7611c92565b9050606002018036038101906109ed919061253b565b8152602001610a026080890160608a016123db565b73ffffffffffffffffffffffffffffffffffffffff168152602001610a2d60a0890160808a01612557565b67ffffffffffffffff169052610fd0565b600101610968565b50604080518082019091528435815260208101610a638486612572565b815250868681518110610a7857610a78611c92565b602002602001018190525050505050610a918160010190565b90506108ce565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344adc90e34846040518363ffffffff1660e01b8152600401610af591906125e6565b60006040518083038185885af1158015610b13573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b5a91908101906126d9565b90506000805b84811015610c575736888883818110610b7b57610b7b611c92565b9050602002810190610b8d9190611cc1565b9050366000610b9f602084018461246c565b90925090508060005b81811015610c4157610bc060808601606087016123db565b600360008a8a81518110610bd657610bd6611c92565b6020026020010151815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550866001019650610c3a8160010190565b9050610ba8565b5050505050610c508160010190565b9050610b60565b509093505050505b92915050565b610c7c610c773683900383018361276a565b610d74565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663469262673460405180604001604052808560000135815260200185602001803603810190610ce291906127d6565b90526040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815281516004820152602091820151805160248301529091015160448201526064016000604051808303818588803b158015610d4957600080fd5b505af1158015610d5d573d6000803e3d6000fd5b505050505050565b6000610d6f61131b565b905090565b608081015167ffffffffffffffff1615801590610da857504267ffffffffffffffff16816080015167ffffffffffffffff16105b15610ddf576040517f1ab7da6b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208082015180516000908152600390925260409091205473ffffffffffffffffffffffffffffffffffffffff1680610e44576040517fc5723b5100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81163314610e93576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040830151610ea181611453565b606080850151855185516020808801516080808b0151604080517f78a69a78c1a55cdff5cbf949580b410778cd9e4d1ecbe6f06a7fa8dc2441b57d9581019590955273ffffffffffffffffffffffffffffffffffffffff90971696840196909652958201939093529384015260a083015267ffffffffffffffff1660c0820152600090610f479060e0015b60405160208183030381529060405280519060200120611561565b9050846060015173ffffffffffffffffffffffffffffffffffffffff16610f7c828460000151856020015186604001516115a9565b73ffffffffffffffffffffffffffffffffffffffff1614610fc9576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b608081015167ffffffffffffffff161580159061100457504267ffffffffffffffff16816080015167ffffffffffffffff16105b1561103b576040517f1ab7da6b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6020810151604082015161104e81611453565b600061112a7fea02ffba7dcb45f6fc649714d23f315eef12e3b27f9a7735d8d8bf41eb2b1af160001b8560600151866000015186600001518760200151886040015189606001518a60800151805190602001208b60a001518d60800151604051602001610f2c9a99989796959493929190998a5273ffffffffffffffffffffffffffffffffffffffff98891660208b015260408a019790975294909616606088015267ffffffffffffffff928316608088015290151560a087015260c086015260e0850193909352610100840152166101208201526101400190565b9050836060015173ffffffffffffffffffffffffffffffffffffffff1661115f828460000151856020015186604001516115a9565b73ffffffffffffffffffffffffffffffffffffffff16146111ac576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b606060006111bf836115d1565b600101905060008167ffffffffffffffff8111156111df576111df611c63565b6040519080825280601f01601f191660200182016040528015611209576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461121357509392505050565b606060ff831461128a57611283836116b3565b9050610c5f565b818054611296906120f8565b80601f01602080910402602001604051908101604052809291908181526020018280546112c2906120f8565b801561130f5780601f106112e45761010080835404028352916020019161130f565b820191906000526020600020905b8154815290600101906020018083116112f257829003601f168201915b50505050509050610c5f565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614801561138157507f000000000000000000000000000000000000000000000000000000000000000046145b156113ab57507f000000000000000000000000000000000000000000000000000000000000000090565b610d6f604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b8051602080830151604080850151905160f89490941b7fff0000000000000000000000000000000000000000000000000000000000000016928401929092526021830152604182015260009060610160405160208183030381529060405290506004816040516114c391906127f2565b9081526040519081900360200190205460ff161561150d576040517fcce9a82400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160048260405161151f91906127f2565b90815260405190819003602001902080549115157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009092169190911790555050565b6000610c5f61156e61131b565b836040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b60008060006115ba878787876116f2565b915091506115c7816117e1565b5095945050505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061161a577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310611646576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061166457662386f26fc10000830492506010015b6305f5e100831061167c576305f5e100830492506008015b612710831061169057612710830492506004015b606483106116a2576064830492506002015b600a8310610c5f5760010192915050565b606060006116c08361199c565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561172957506000905060036117d8565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561177d573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166117d1576000600192509250506117d8565b9150600090505b94509492505050565b60008160048111156117f5576117f5612804565b036117fd5750565b600181600481111561181157611811612804565b0361187d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064015b60405180910390fd5b600281600481111561189157611891612804565b036118f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401611874565b600381600481111561190c5761190c612804565b03611999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401611874565b50565b600060ff8216601f811115610c5f576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083601f8401126119ef57600080fd5b50813567ffffffffffffffff811115611a0757600080fd5b6020830191508360208260051b8501011115611a2257600080fd5b9250929050565b60008060208385031215611a3c57600080fd5b823567ffffffffffffffff811115611a5357600080fd5b611a5f858286016119dd565b90969095509350505050565b600060208284031215611a7d57600080fd5b5035919050565b60005b83811015611a9f578181015183820152602001611a87565b50506000910152565b60008151808452611ac0816020860160208601611a84565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611b056020830184611aa8565b9392505050565b600060208284031215611b1e57600080fd5b813567ffffffffffffffff811115611b3557600080fd5b820160e08185031215611b0557600080fd5b7fff00000000000000000000000000000000000000000000000000000000000000881681526000602060e081840152611b8360e084018a611aa8565b8381036040850152611b95818a611aa8565b6060850189905273ffffffffffffffffffffffffffffffffffffffff8816608086015260a0850187905284810360c0860152855180825283870192509083019060005b81811015611bf457835183529284019291840191600101611bd8565b50909c9b505050505050505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611c3e57835183529284019291840191600101611c22565b50909695505050505050565b60006101008284031215611c5d57600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61833603018112611cf557600080fd5b9190910192915050565b60405160a0810167ffffffffffffffff81118282101715611d2257611d22611c63565b60405290565b60405160c0810167ffffffffffffffff81118282101715611d2257611d22611c63565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d9257611d92611c63565b604052919050565b600067ffffffffffffffff821115611db457611db4611c63565b5060051b60200190565b600060408284031215611dd057600080fd5b6040516040810181811067ffffffffffffffff82111715611df357611df3611c63565b604052823581526020928301359281019290925250919050565b600060608284031215611e1f57600080fd5b6040516060810181811067ffffffffffffffff82111715611e4257611e42611c63565b604052905080823560ff81168114611e5957600080fd5b8082525060208301356020820152604083013560408201525092915050565b600082601f830112611e8957600080fd5b81356020611e9e611e9983611d9a565b611d4b565b82815260609283028501820192828201919087851115611ebd57600080fd5b8387015b85811015611ee057611ed38982611e0d565b8452928401928101611ec1565b5090979650505050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f1157600080fd5b919050565b803567ffffffffffffffff81168114611f1157600080fd5b600060a08236031215611f4057600080fd5b611f48611cff565b8235815260208084013567ffffffffffffffff80821115611f6857600080fd5b9085019036601f830112611f7b57600080fd5b8135611f89611e9982611d9a565b81815260069190911b83018401908481019036831115611fa857600080fd5b938501935b82851015611fd157611fbf3686611dbe565b82528582019150604085019450611fad565b80868801525050506040860135925080831115611fed57600080fd5b5050611ffb36828601611e78565b60408301525061200d60608401611eed565b606082015261201e60808401611f16565b608082015292915050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156120e9578984037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0018652825180518552880151888501889052805188860181905290890190839060608701905b808310156120d4576120c082855180518252602090810151910152565b928b019260019290920191908a01906120a3565b50978a01979550505091870191600101612051565b50919998505050505050505050565b600181811c9082168061210c57607f821691505b602082108103611c5d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600082601f83011261215657600080fd5b813567ffffffffffffffff81111561217057612170611c63565b6121a160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611d4b565b8181528460208386010111156121b657600080fd5b816020850160208301376000918101602001919091529392505050565b600060c082840312156121e557600080fd5b6121ed611d28565b90506121f882611eed565b815261220660208301611f16565b60208201526040820135801515811461221e57600080fd5b604082015260608281013590820152608082013567ffffffffffffffff81111561224757600080fd5b61225384828501612145565b60808301525060a082013560a082015292915050565b600060e0823603121561227b57600080fd5b612283611cff565b82358152602083013567ffffffffffffffff8111156122a157600080fd5b6122ad368286016121d3565b6020830152506122c03660408501611e0d565b60408201526122d160a08401611eed565b606082015261201e60c08401611f16565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff41833603018112611cf557600080fd5b6000610c5f36836121d3565b73ffffffffffffffffffffffffffffffffffffffff815116825267ffffffffffffffff6020820151166020830152604081015115156040830152606081015160608301526000608082015160c0608085015261238160c0850182611aa8565b60a093840151949093019390935250919050565b6020815281516020820152600060208301516040808401526123ba6060840182612322565b949350505050565b6000602082840312156123d457600080fd5b5051919050565b6000602082840312156123ed57600080fd5b611b0582611eed565b60008451612408818460208901611a84565b80830190507f2e000000000000000000000000000000000000000000000000000000000000008082528551612444816001850160208a01611a84565b6001920191820152835161245f816002840160208801611a84565b0160020195945050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124a157600080fd5b83018035915067ffffffffffffffff8211156124bc57600080fd5b6020019150600581901b3603821315611a2257600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261250957600080fd5b83018035915067ffffffffffffffff82111561252457600080fd5b6020019150606081023603821315611a2257600080fd5b60006060828403121561254d57600080fd5b611b058383611e0d565b60006020828403121561256957600080fd5b611b0582611f16565b6000612580611e9984611d9a565b80848252602080830192508560051b85013681111561259e57600080fd5b855b818110156125da57803567ffffffffffffffff8111156125c05760008081fd5b6125cc36828a016121d3565b8652509382019382016125a0565b50919695505050505050565b602080825282518282018190526000919060409081850190600581811b8701840188860187805b858110156126c9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08b85030187528251805185528901518985018990528051898601819052908a0190606081881b870181019190870190855b818110156126b3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08985030183526126a1848651612322565b948e01949350918d0191600101612667565b505050978a01979450509188019160010161260d565b50919a9950505050505050505050565b600060208083850312156126ec57600080fd5b825167ffffffffffffffff81111561270357600080fd5b8301601f8101851361271457600080fd5b8051612722611e9982611d9a565b81815260059190911b8201830190838101908783111561274157600080fd5b928401925b8284101561275f57835182529284019290840190612746565b979650505050505050565b6000610100828403121561277d57600080fd5b612785611cff565b823581526127968460208501611dbe565b60208201526127a88460608501611e0d565b60408201526127b960c08401611eed565b60608201526127ca60e08401611f16565b60808201529392505050565b6000604082840312156127e857600080fd5b611b058383611dbe565b60008251611cf5818460208701611a84565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea164736f6c6343000813000a";

type EIP712ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EIP712ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EIP712Proxy__factory extends ContractFactory {
  constructor(...args: EIP712ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    eas: AddressLike,
    name: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(eas, name, overrides || {});
  }
  override deploy(
    eas: AddressLike,
    name: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(eas, name, overrides || {}) as Promise<
      EIP712Proxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EIP712Proxy__factory {
    return super.connect(runner) as EIP712Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EIP712ProxyInterface {
    return new Interface(_abi) as EIP712ProxyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): EIP712Proxy {
    return new Contract(address, _abi, runner) as unknown as EIP712Proxy;
  }
}
