import MFReport from "./MFReport";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useQuery } from "@tanstack/react-query";
import { mutualFundAPI } from "@/api/funds";
import { useParams } from "react-router-dom";
import { useNAVHistory } from "@/state/queries/funds";
import { type CSSProperties } from "react";

const PDFGenButton = ({ chart }: { chart?: string | null }) => {
  const styles: Record<string, CSSProperties> = {
    container: {
      width: "220px",
      borderRadius: "5px",
      padding: "15px 12px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    },
    flex: { width: "100%", display: "flex", gap: "5px", alignItems: "center" },
    bold: { fontSize: "13px", fontWeight: 600 },
    thin: { fontSize: "11px", color: "#6f6f6f", fontWeight: 500 },
    btn: {
      borderRadius: "3px",
      border: "1px solid gray",
      display: "flex",
      alignItems: "center",
      gap: "2px",
      padding: "3px",
      fontSize: "11px",
      color: "#4f4f4f",
      fontWeight: 600,
      cursor: "pointer",
      userSelect: "none",
    },
  };

  const { mutualFundName } = useParams<{ mutualFundName: string }>();

  const { data } = useQuery({
    queryKey: ["fundDetails", mutualFundName],
    queryFn: () => mutualFundAPI.getFundDetails(mutualFundName || ""),
    enabled: !!mutualFundName,
  });

  const { data: latestNav } = useQuery({
    queryKey: ["latestNav", mutualFundName],
    queryFn: () => mutualFundAPI.getLatestNAV(mutualFundName || ""),
    enabled: !!mutualFundName,
  });

  const { data: navHistory } = useNAVHistory(mutualFundName);

  return (
    <div style={styles.container}>
      <div style={{ ...styles.flex, ...{ justifyContent: "space-between" } }}>
        <PDFDownloadLink
          document={
            <MFReport
              data={data}
              latestNav={latestNav}
              navHistory={navHistory || []}
              chart={chart || ""}
            />
          }
          fileName="fund_report.pdf"
        >
          Download PDF Report
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PDFGenButton;
