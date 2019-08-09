import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail"
const ResultList = props => {
  return (
    <View style = {styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        horizontal={true}
        data={props.results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail results = {item}/>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
      marginLeft:15,
      //marginBottom:10
  },
    container:{
      marginBottom:10
    }
});
export default ResultList;
