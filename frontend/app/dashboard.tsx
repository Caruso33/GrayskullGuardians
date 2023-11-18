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
import test from "../utils/abi/test.json";
import simple from "../utils/abi/simple.json";
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

const Dashboard: NextPage = () => {
  const { address, isConnected } = useAccount(); // get the user's wallet
  const [proof, setProof] = useState<ISuccessResult | null>(null);

  const [bgstep, setBgstep] = useState(bg1);

  const { config } = usePrepareContractWrite({
    address: "0x88E6FEFD19f640d55D9B5e980A62b92f0607d1Df" as any, //  0xD46d69B47e164d09Fb57c0550C1Bed705056A844
    abi: antiCheatFactoryABI, // simple
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
      "0xFAA2dD8849482d8f08895A34Fe5Ff25A5D98222a", // should be the L2 contract
    ],
  });

  const { write, data } = useContractWrite({
    address: "0x88E6FEFD19f640d55D9B5e980A62b92f0607d1Df" as any, //  0xD46d69B47e164d09Fb57c0550C1Bed705056A844
    abi: antiCheatFactoryABI, // simple
    // enabled: proof != null && address != null,
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
      "0xFAA2dD8849482d8f08895A34Fe5Ff25A5D98222a", // should be the L2 contract
    ],
  });

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
                className="btn btn-lg z-50 btn-ghost"
                onClick={() => setBgstep(bg2)}
              >
                __________________________
              </button>
            </div>
            <div className="absolute bottom-0 left-96 p-4 mb-11 ml-96">
              <button
                className="btn btn-lg z-50 btn-ghost"
                onClick={() => setBgstep(bg6)}
              >
                __________________________
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
              __________________________
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
              __________________________
            </button>
          </div>
        )}

        {/* Step 4 */}
        {bgstep == bg4 && isConnected && (
          <div className="absolute bottom-0 left-0 p-4 mb-11 ml-56">
            <IDKitWidget
              app_id="app_staging_306e82d3dd3e7d2b42eb41105bfe4ad3" // must be an app set to on-chain
              action="onchain"
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
                  __________________________
                </button>
              )}
            </IDKitWidget>
          </div>
        )}

        {/* Step 5 */}
        {bgstep == bg5 && proof && (
          
            <>
              <div className="absolute bottom-0 left-0 p-4 mb-11 ml-56">
                <button className="btn btn-lg z-50 btn-ghost" onClick={() => write?.()}>
                __________________________
                </button>
              </div>
              <div className="absolute bottom-0 left-96 p-4 mb-11 ml-96">
                <button className="btn btn-lg z-50 btn-ghost" onClick={() => write?.()}>
                __________________________
                </button>
              </div>
            </>
 
        )}

        {/* Step 6 */}
      </div>
    </div>
  );
};

export default Dashboard;
