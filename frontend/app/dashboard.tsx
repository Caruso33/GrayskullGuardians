import type { NextPage } from "next";

import { IDKitWidget, solidityEncode } from "@worldcoin/idkit"; // add import for solidityEncode

import { useAccount } from "wagmi";

const Dashboard: NextPage = () => {
  const { address } = useAccount(); // get the user's wallet

  function onSuccess() {} // add onSuccess function

  return (
    <div className="p-10">
      <w3m-button />

      <IDKitWidget
        app_id="app_staging_306e82d3dd3e7d2b42eb41105bfe4ad3" // must be an app set to on-chain
        action="onchain"
        signal={address} // prevents tampering with a message
        onSuccess={onSuccess}
        
        // no use for handleVerify, so it is removed
        // leave credential_types unspecified (orb-only by default), as phone credentials are not supported on-chain
        enableTelemetry

      >
        {({ open }) => <button onClick={open}>Verify with World ID</button>}
      </IDKitWidget>
    </div>
  );
};

export default Dashboard;
