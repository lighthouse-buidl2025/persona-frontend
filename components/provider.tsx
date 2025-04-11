"use client";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { http } from "viem";
import {
  mainnet,
  sepolia,
  optimismSepolia,
  optimism,
  story,
  storyTestnet,
} from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const config = createConfig({
  chains: [mainnet, sepolia, optimismSepolia, optimism, story, storyTestnet],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [optimismSepolia.id]: http(),
    [optimism.id]: http(),
    [story.id]: http(),
    [storyTestnet.id]: http(),
  },
});

export default function Wallet({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_ENVIRONMENT_ID!,
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
