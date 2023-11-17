import type { NextPage } from "next";

import { IDKitWidget, ISuccessResult, solidityEncode } from "@worldcoin/idkit"; // add import for solidityEncode
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { useEffect, useState } from "react";
import antiCheatFactoryABI from "../utils/abi/antiCheatFactory.json";

import { decodeAbiParameters } from "viem";

const Dashboard: NextPage = () => {
  const { address } = useAccount(); // get the user's wallet
  const [proof, setProof] = useState<ISuccessResult | null>(null);

  const { config } = usePrepareContractWrite({
    address: "0xFAA2dD8849482d8f08895A34Fe5Ff25A5D98222a" as any,
    abi: antiCheatFactoryABI,
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
      "0xFAA2dD8849482d8f08895A34Fe5Ff25A5D98222a",
    ],
  });

  const { write, isError: bla } = useContractWrite(config);

  // useEffect(() => {
  //   if (proof?.proof) {
  //     const unpackedProof = decodeAbiParameters(
  //       [{ type: "uint256[8]" }],
  //       proof?.proof as any
  //     )[0];

  //     console.log("unpackedProof", unpackedProof);
  //   }
  // }, [proof]);

  return (
    <div className="p-10">
      <w3m-button />

      <IDKitWidget
        app_id="app_staging_306e82d3dd3e7d2b42eb41105bfe4ad3" // must be an app set to on-chain
        action="onchain"
        signal={address} // prevents tampering with a message
        onSuccess={setProof}
        autoClose
        theme="light"
      >
        {({ open }) => <button onClick={open}>Verify with World ID</button>}
      </IDKitWidget>
      {proof ? (
        <>
          <br />
          <br />
          <br />
          <button onClick={() => write?.()}>Deploy Contract</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dashboard;
