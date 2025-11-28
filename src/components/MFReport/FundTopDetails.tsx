import { Text, View } from "@react-pdf/renderer";
import { styles } from "./utils";

function FundTopDetails({ data, latestNav }: { data: any; latestNav: any }) {
  return (
    <View style={styles.titleContainer}>
      <View>
        <Text style={styles.reportTitle}>Fund Name</Text>
        <Text style={styles.titleContainer}>{data?.meta.scheme_name}</Text>
        <Text style={styles.reportTitle}>Fund House</Text>
        <Text style={styles.titleContainer}>{data?.meta.fund_house}</Text>
        <Text style={styles.reportTitle}>Category</Text>
        <Text style={styles.titleContainer}>{data?.meta.scheme_category}</Text>
        <Text style={styles.reportTitle}>Latest NAV</Text>
        <Text style={styles.titleContainer}>{latestNav?.nav}</Text>
      </View>
    </View>
  );
}

export default FundTopDetails;
