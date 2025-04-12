interface PersonaData {
  wallet: {
    address: string;
    balance: number;
    distinct_contract_count: number;
    dex_platform_diversity: number;
    avg_token_holding_period: number;
    transaction_frequency: number;
    dex_volume_usd: number;
    nft_collections_diversity: number;
    explorer_score: number;
    diamond_score: number;
    whale_score: number;
    degen_score: number;
    distinct_contract_count_percentile: number;
    dex_platform_diversity_percentile: number;
    avg_token_holding_period_percentile: number;
    transaction_frequency_percentile: number;
    dex_volume_usd_percentile: number;
    nft_collections_diversity_percentile: number;
    created_at: string;
    updated_at: string;
  };
}

interface UsePersonaDataReturn {
  data: PersonaData | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  updateFetch: () => Promise<void>;
}

interface ContractItem {
  contract_address: string;
  name: string | null;
  category: string | null;
  description: string | null;
  frequency: number;
}

type CommunityContract = {
  contract_address: string;
  frequency: number;
};
type PersonaScoreItem = {
  id: number;
  explorer_score: number;
  diamond_score: number;
  whale_score: number;
  degen_score: number;
  created_at: string; // 또는 Date 로 변환 가능
};

type Agent = {
  id: string;
  name: string;
  clients: any[]; // 필요하면 정확한 타입으로 변경 가능
};

export type {
  PersonaData,
  UsePersonaDataReturn,
  CommunityContract,
  ContractItem,
  PersonaScoreItem,
  Agent,
};
