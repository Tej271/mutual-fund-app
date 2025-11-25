import { useParams } from "react-router-dom";
import { MFDetailsCard } from "@/components/MFDetailsCard";
import { useQuery } from "@tanstack/react-query";
import { mutualFundAPI } from "@/api/funds";
import { NAVHistoryChart } from "@/components/NAVHistoryChart";
import { useNAVHistory } from "@/state/queries/funds";

function MutualFundPage() {
  const { mutualFundName } = useParams<{ mutualFundName: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ["fundDetails", mutualFundName],
    queryFn: () => mutualFundAPI.getFundDetails(mutualFundName || ""),
    enabled: !!mutualFundName,
  });

  const { data: navHistory, isLoading: isNavHistoryLoading } = useNAVHistory(mutualFundName);

  if (error) {
    return <div>Error loading fund details</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <MFDetailsCard
        schemeName={data?.meta.scheme_name || "Loading..."}
        fundHouse={data?.meta.fund_house || "Loading..."}
        category={data?.meta.scheme_category || "Loading..."}
        isLoading={isLoading}
      />

      <NAVHistoryChart data={navHistory || []} isLoading={isNavHistoryLoading} />
    </div>
  );
}

export default MutualFundPage;
