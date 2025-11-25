import { useQuery } from "@tanstack/react-query";
import { mutualFundAPI } from "@/api/funds";

export const useSearchFunds = (query: string) => {
  return useQuery({
    queryKey: ["funds", query],
    queryFn: async () => {
      const response = mutualFundAPI.searchFunds(query);
      return response;
    },
    enabled: query.trim().length > 0,
  });
};
