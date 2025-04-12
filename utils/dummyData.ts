import { PersonaData, ContractItem, Agent } from "@/types";

export const dummyPersonaData: PersonaData = {
  wallet: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    balance: 6.24e18,
    distinct_contract_count: 9, // 사용한 체인 수
    dex_platform_diversity: 2, // 사용한 프로토콜 수
    avg_token_holding_period: 292.81, // 평균 토큰 보유 기간
    transaction_frequency: 1.95, // 트랜잭션 빈도
    dex_volume_usd: 17426451.01, // 거래량
    nft_collections_diversity: 25, // 사용한 NFT 컬렉션 수
    explorer_score: 3.3,
    diamond_score: 3.6,
    whale_score: 4.4,
    degen_score: 3.5,
    distinct_contract_count_percentile: 20.3, // Explorer (사용 체인 수 상위 80%)
    dex_platform_diversity_percentile: 29.9, // Degen 상위 70% (플랫폼 다양성 상위)
    avg_token_holding_period_percentile: 30.9, // Diamond Hands(평균 토큰 홀딩 기간 상위 30.9%)
    transaction_frequency_percentile: 30.7, // Degen (transaction 빈도 상위 30.7%)
    dex_volume_usd_percentile: 48.8, // Whale (상위 거래량 )
    nft_collections_diversity_percentile: 53.4, // Explorer (?)
    created_at: "2025-04-12 01:07:16",
    updated_at: "2025-04-12 01:07:16",
  },
};

export const dummyPersonaGroup: ContractItem[] = [
  {
    contract_address: "0x6a000f20005980200259b80c5102003040001068",
    name: "paraswap",
    category: "unknown",
    subdescription: "14.2%",
    description:
      "Velora is the most comprehensive and flexible trading protocol for Decentralized Finance (DeFi). We use decentralized intents to provide advanced features such as limit orders, super hooks, and chain-abstracted swaps.",
    frequency: 34,
    created_at: "2025-04-12 01:07:16",
  },
  {
    contract_address: "0x111111125421ca6dc452d289314280a0f8842a65",
    name: null,
    category: null,
    description: null,
    subdescription: "4.12%",
    frequency: 31,
    created_at: "2025-04-12 01:07:16",
  },
  {
    contract_address: "0x0000000000a39bb272e79075ade125fd351887ac",
    name: "blur",
    category: "nft",
    subdescription: "12.88%",
    description: "The NFT marketplace for pro traders",
    frequency: 31,
    created_at: "2025-04-12 01:07:16",
  },
  {
    contract_address: "0xcf5540fffcdc3d510b18bfca6d2b9987b0772559",
    name: "odos",
    category: "unknown",
    subdescription: "10%",
    description:
      "Odos is a cutting-edge platform that caters to both institutional and retail traders, empowering them with a competitive edge in swaps, using our comprehensive suite of tools to offer a wide array of functionalities to enhance trading strategies and optimize capital efficiency.",
    frequency: 30,
    created_at: "2025-04-12 01:07:16",
  },
  {
    contract_address: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af",
    name: "uniswap v4",
    subdescription: "8%",
    category: "unknown",
    description:
      "Uniswap v4 inherits all of the capital efficiency gains of Uniswap v3, but provides flexibility via hooks and gas optimizations across the entire lifecycle",
    frequency: 29,
    created_at: "2025-04-12 01:07:16",
  },
];
export const dummyAgents: { agents: Agent[] } = {
  agents: [
    {
      id: "b850bc30-45f8-0041-a00a-83df46d8555d",
      name: "Eliza",
      clients: [],
    },
  ],
};
