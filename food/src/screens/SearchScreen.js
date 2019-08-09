import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();
  console.log(results);

  const filterResultsByPrice = (price) => {
      return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>we have found {results.length} results</Text>
      {errorMsg.length > 0 ? <Text>{errorMsg} </Text> : null}

      <ResultsList results={filterResultsByPrice('$')} title="cost effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big spender" />
    </View>
  );
};

export default SearchScreen;
