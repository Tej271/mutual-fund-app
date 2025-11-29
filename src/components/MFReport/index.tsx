import { Page, Document, Image, Text } from "@react-pdf/renderer";
import FundTopDetails from "./FundTopDetails";
import NAVHistoryTable from "./NAVHistoryTable";
import { styles } from "./utils";

const MFReport = ({
  data,
  latestNav,
  navHistory,
  chart,
}: {
  data: any;
  latestNav: any;
  navHistory?: any[];
  chart?: string;
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <FundTopDetails data={data} latestNav={latestNav} />
        <Text style={styles.reportTitle}>NAV Chart:</Text>
        <Image style={{ width: "100%", height: 200 }} src={chart} />
        <NAVHistoryTable navHistory={navHistory || []} />
      </Page>
    </Document>
  );
};
export default MFReport;
