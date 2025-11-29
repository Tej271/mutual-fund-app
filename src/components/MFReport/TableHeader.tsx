import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerCell: {
    fontWeight: "bold",
    fontSize: 10,
  },
  dateCell: {
    width: "60%",
  },
  navCell: {
    width: "40%",
    textAlign: "right",
  },
});

interface TableHeaderProps {
  dateLabel?: string;
  navLabel?: string;
}

const TableHeader = ({ dateLabel = "Date", navLabel = "NAV" }: TableHeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={[styles.headerCell, styles.dateCell]}>{dateLabel}</Text>
      <Text style={[styles.headerCell, styles.navCell]}>{navLabel}</Text>
    </View>
  );
};

export default TableHeader;
