//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

//make this component available to the app
export default AuthScreen;