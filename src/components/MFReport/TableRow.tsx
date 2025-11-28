// Source - https://stackoverflow.com/a
// Posted by Yash, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-28, License - CC BY-SA 4.0

import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    width: "60%",
    textAlign: "right",
  },
  xyz: {
    width: "40%",
  },
});

const TableRow = ({ items }: { items: { nav: string; date: string; sr: number | string }[] }) => {
  const rows = items.map((item) => (
    <View style={styles.row} key={item.sr.toString()}>
      <Text style={styles.xyz}>{item.date}</Text>
      <Text style={styles.description}>{item.nav}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default TableRow;
