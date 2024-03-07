import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { colors } from "../utils/colors";
import { Countdown } from "../components/Countdown";
import { spacing } from "../utils/sizes";
import { fontSizes } from "../utils/sizes";
import { ProgressBar, MD3Colors } from "react-native-paper";

export const Timer = ({ focusSubject }) => {
  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  const [progress, setProgress] = useState(1);
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Countdown isPaused={isStarted} onProgress={setProgress} onEnd={()=> {Vibration.vibrate(PATTERN)}} />
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <ProgressBar
          progress={progress}
          style={styles.progressBar}
          color={colors.sienaGold}
        />
      </View>
      <Text style={styles.text}>Focus Feature:</Text>
      <Text style={styles.text}>{focusSubject}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    paddingTop: spacing.md,
    color: colors.offWhite,
    fontSize: fontSizes.lg,
    textAlign: "center",
  },

  progressBar: {
    height: 10,
    borderRadius: 60,
  },
});
