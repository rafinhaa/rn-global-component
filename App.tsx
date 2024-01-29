import { GlobalToast } from "@components/GlobalToast";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Buttons } from "screens/Buttons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Buttons />

      <GlobalToast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
