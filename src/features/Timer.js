import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { Countdown } from "../components/Countdown";
import { spacing } from "../utils/sizes";
import { fontSizes } from "../utils/sizes";

export const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused onProgress={() => {}} />
      </View>
      <Text
        style={
         styles.text
        }
      >
        Focus Feature:
      </Text>
      <Text
        style={
         styles.text
        }
      >
        {focusSubject}
      </Text>
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
  countdown: {},
});
