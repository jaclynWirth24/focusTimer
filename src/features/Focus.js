import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import {fontSizes} from "../utils/sizes";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />

        <View style={styles.button}>
          <RoundedButton 
            size={50} 
            title="+"
            onPress={() => addSubject(subject)} />
        </View>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    padding: spacing.lg,

  },
  text: {
    color: colors.offWhite,
    fontSize: fontSizes.lg,
  
  },
  textInput: {
    flex: 1,
    marginRight: spacing.lg,
  },
});
