//import liraries
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

// create a component
const ArticleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ArticleScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

//make this component available to the app
export default ArticleScreen;
