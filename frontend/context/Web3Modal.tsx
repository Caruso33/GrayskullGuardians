"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrumGoerli, goerli, optimismGoerli, mainnet } from "viem/chains";

// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

// 2. Create wagmiConfig
const metadata = {
	name: "Next Starter Template",
	description: "A Next.js starter template with Web3Modal v3 + Wagmi",
	url: "https://web3modal.com",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [goerli, arbitrumGoerli, optimismGoerli, mainnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
