import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop:10
  },
  inputStyle: {
    flex:1,
    marginLeft:10
  }
});
export default SearchBar;
