import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "./src/utils/colors.js";
import { Focus } from "./src/features/Focus.js";
import { Timer } from "./src/features/Timer.js";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => {}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sienaGreen,
    // colors.forestGreen,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  Text: {
    color: colors.offWhite,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
});
