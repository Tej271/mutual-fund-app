import { useQuery } from "@tanstack/react-query";
import { mutualFundAPI, type NAVData } from "@/api/funds";

interface ChartNAVData {
  date: Date;
  formattedDate: string;
  nav: number;
}

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

export const useNAVHistory = (schemeCode?: string) => {
  return useQuery<NAVData[], Error, ChartNAVData[]>({
    queryKey: ["navHistory", schemeCode],
    queryFn: async () => {
      if (!schemeCode) return [];
      const data = await mutualFundAPI.getNAVHistory(schemeCode, 10);
      return data;
    },
    enabled: !!schemeCode,
    select: (data) => {
      return data
        .map((item) => {
          const [day, month, year] = item.date.split("-").map(Number);
          const date = new Date(year, month - 1, day);

          return {
            date,
            formattedDate: date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
            nav: parseFloat(item.nav),
          };
        })
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map(({ date, ...rest }) => ({ date, ...rest }));
    },
  });
};