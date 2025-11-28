import { View, Text } from "@react-pdf/renderer";
import { styles } from "./utils";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

interface NavEntry {
  date: string;
  nav: string;
}

interface NAVHistoryTableProps {
  navHistory?: NavEntry[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function NAVHistoryTable({ navHistory = [] }: NAVHistoryTableProps) {
  const lastTenEntries = navHistory
    .slice(0, 10)
    .map((item, index) => ({ ...item, date: formatDate(item.date), sr: index + 1 }));

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.reportTitle}>NAV History</Text>

      <View>
        <TableHeader />
        <TableRow items={lastTenEntries} />
      </View>
    </View>
  );
}

export default NAVHistoryTable;
