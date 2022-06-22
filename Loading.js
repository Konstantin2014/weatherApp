import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loding() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Завантаження погоди...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#67E667",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "#008500",
    paddingHorizontal: 50,
    paddingVertical: 250,
  },
});
