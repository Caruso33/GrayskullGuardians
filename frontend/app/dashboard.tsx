import type { NextPage } from "next";

import { IDKitWidget, ISuccessResult, solidityEncode } from "@worldcoin/idkit"; // add import for solidityEncode
import {
  mainnet,
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { useEffect, useState } from "react";
import antiCheatFactoryABI from "../utils/abi/antiCheatFactory.json";
import antiCheatFactoryL2ABI from "../utils/abi/antiCheatL2.json";
import bg1 from "../public/bg/1.jpeg";
import bg2 from "../public/bg/2.jpeg";
import bg3 from "../public/bg/3.jpeg"; // replace with your image path
import bg4 from "../public/bg/4.jpeg"; // replace with your image path
import bg5 from "../public/bg/5.jpeg"; // replace with your image path
import bg6 from "../public/bg/6.jpeg"; // replace with your image path

import { Chain, createWalletClient, custom } from "viem";
import { mainnet as wcMainnet } from "viem/chains";

import Image, { StaticImageData } from "next/image";

import { decodeAbiParameters } from "viem";
import Link from "next/link";

const Dashboard: NextPage = () => {
  const { address, isConnected } = useAccount(); // get the user's wallet
  const [proof, setProof] = useState<ISuccessResult | null>(null);

  const [bgstep, setBgstep] = useState(bg1);

  const [l2Address, setL2Address] = useState(0x0);

  const { config } = usePrepareContractWrite({
    address: "0x7aeC313A0e6BF58ae902CcBE5a8e80D0fC0e221F" as any,
    abi: antiCheatFactoryABI, // abi
    enabled: proof != null && address != null,
    functionName: "verifyAndDeployAntiCheat",
    args: [
      address!,
      proof?.merkle_root ? proof?.merkle_root : BigInt(0),
      proof?.nullifier_hash ? proof?.nullifier_hash : BigInt(0),
      proof?.proof
        ? decodeAbiParameters([{ type: "uint256[8]" }], proof?.proof as any)[0]
        : [
            BigInt(0),
            BigInt(0),
            BigInt(0),
            BigInt(0),
            BigInt(0),
            BigInt(0),
            BigInt(0),
            BigInt(0),
          ],
      l2Address, // should be the L2 contract
    ],
  });

  const { write, data } = useContractWrite(config);

  const { config: configL2 } = usePrepareContractWrite({
    address: "0x81442711f001fe7d80190e78d16887694436817a" as any, //  0xD46d69B47e164d09Fb57c0550C1Bed705056A844
    abi: antiCheatFactoryL2ABI.abi, // abi
    enabled: proof != null && address != null,
    functionName: "deployAntiCheatL2",
    args: [
      "0xfd7501c6a9d8b63887dd2678d7e8f56c68c8a6ab", // L2 SmoothiePool Contract
      proof?.nullifier_hash,
      address!,
    ],
  });

  const { write: writeL2, data: dataL2 } = useContractWrite(config);

  useEffect(() => {
    console.log(dataL2);
  }, [dataL2]);

  async function addMEVBlocker() {
    const walletClient = createWalletClient({
      chain: wcMainnet,
      transport: custom((window as any).ethereum),
    });

    const mevBlocker: Chain = {
      id: 1,
      network: "homestead",
      name: "Ethereum",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        default: {
          http: ["https://rpc.mevblocker.io"],
          webSocket: ["wss://rpc.mevblocker.io"],
        },
        public: {
          http: ["https://rpc.mevblocker.io"],
          webSocket: ["wss://rpc.mevblocker.io"],
        },
      },
    };

    await walletClient.addChain({ chain: mevBlocker });

    setBgstep(bg4);
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  const BackgroundImage = () => {
    return (
      <div className="background">
        <Image
          src={bgstep}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          tabIndex={-1}
          className="-z-10"
        />
      </div>
    );
  };

  return (
    <div className="bg-[#12345600] h-screen">
      <BackgroundImage />
      <div className="p-10">
        <div className="flex justify-end">{isConnected && <w3m-button />}</div>

        <div className="flex justify-start">
          {" "}
          <button className="btn z-50" onClick={() => setBgstep(bg1)}>
            Start Over
          </button>
        </div>

        {/* Step 1 */}

        {bgstep == bg1 && (
          <>
            <div className="absolute bottom-0 left-0 p-4 mb-11 ml-56">
              <button
                className="btn btn-lg z-50 btn-ghost text-opacity-10"
                onClick={() => setBgstep(bg2)}
              >
                <span className="text-opacity-10 text-cyan-300">
                  __________________________
                </span>
              </button>
            </div>
            <div className="absolute bottom-0 left-96 p-4 mb-11 ml-96">
              <button
                className="btn btn-lg z-50 btn-ghost"
                onClick={() => setBgstep(bg6)}
              >
                <span className="text-opacity-10 text-cyan-300">
                  __________________________
                </span>
              </button>
            </div>
          </>
        )}

        {/* Step 2 */}

        {bgstep == bg2 && isConnected && (
          <div className="absolute bottom-0 left-0 p-4 mb-11 ml-56">
            <button
              className="btn btn-lg z-50 btn-ghost"
              onClick={() => setBgstep(bg3)}
            >
              <span className="text-opacity-10 text-cyan-300">
                __________________________
              </span>
            </button>
          </div>
        )}

        {bgstep == bg2 && !isConnected && (
          <div className="absolute bottom-0 left-0 p-4 mb-11 ml-56">
            <w3m-connect-button />
          </div>
        )}

        {/* Step 3 */}
        {bgstep == bg3 && isConnected && (
          <div className="absolute bottom-0 left-0 p-4 mb-11 ml-56">
            <button
              className="btn btn-lg z-50 btn-ghost"
              onClick={() => addMEVBlocker()}
            >
              <span className="text-opacity-10 text-cyan-300">
                __________________________
              </span>
            </button>
          </div>
        )}

        {/* Step 4 */}
        {bgstep == bg4 && isConnected && (
          <div className="absolute bottom-0 left-0 p-4 mb-11 ml-56">
            <IDKitWidget
              app_id="app_staging_5a3767eb5edf300e988f7d1252ee2f08" // must be an app set to on-chain
              action="verfiy"
              signal={address} // prevents tampering with a message
              onSuccess={(data: any) => {
                setProof(data);
                setBgstep(bg5); // replace with your second function
              }}
              autoClose
              theme="light"
            >
              {({ open }) => (
                <button className="btn btn-lg z-50 btn-ghost" onClick={open}>
                  <span className="text-opacity-10 text-cyan-300">
                    __________________________
                  </span>
                </button>
              )}
            </IDKitWidget>
          </div>
        )}

        {/* Step 5 */}
        {bgstep == bg5 && proof && (
          <>
            <div className="absolute bottom-0 left-0 p-4 mb-11 ml-56">
              <button
                className="btn btn-lg z-50 btn-ghost"
                // onClick={() => writeL2?.()}
              >
                <span className="text-opacity-10 text-cyan-300">
                  __________________________
                </span>
              </button>
            </div>
            <div className="absolute bottom-0 left-96 p-4 mb-11 ml-96">
              <button
                className="btn btn-lg z-50 btn-ghost"
                // onClick={() => write?.()}
                onClick={() => setBgstep(bg6)}
              >
                <span className="text-opacity-10 text-cyan-300">
                  __________________________
                </span>
              </button>
            </div>
          </>
        )}

        {/* Step 6 */}

        {bgstep == bg6 && proof && (
          <>
            <div className="flex items-center justify-center">
              <div className="card w-full glass ml-96 mr-96">
               
                <div className="card-body">
                  <h2 className="card-title text-black">Withdrawal Address</h2>
                  <p className="text-black">0xcF0fad569eef3e2fe21198f4F6e1Cc9b4EabC0493</p>
                  <h2 className="card-title text-black">Free Recipient Address</h2>
                  <p className="text-black">0xFF0A939E6251a1930fF074F6e1Cc9b4C0495693E</p>
                  <div className="card-actions justify-end">
                    <Link className="btn btn-primary" href={"https://goerli.launchpad.ethereum.org/en/"} target="_blank">Set up your Validator!</Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
