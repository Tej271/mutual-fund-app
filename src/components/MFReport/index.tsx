import { Page, Document, Image } from "@react-pdf/renderer";
import FundTopDetails from "./FundTopDetails";
import NAVHistoryTable from "./NAVHistoryTable";
import { styles } from "./utils";
import img from "./images.jpeg";

const MFReport = ({
  data,
  latestNav,
  navHistory,
}: {
  data: any;
  latestNav: any;
  navHistory?: any[];
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={{ width: 100, height: 50 }} source={img} />
        <FundTopDetails data={data} latestNav={latestNav} />
        <NAVHistoryTable navHistory={navHistory || []} />
      </Page>
    </Document>
  );
};
export default MFReport;
