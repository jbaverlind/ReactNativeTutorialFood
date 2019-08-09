import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = (props) => {
  return (
    <View style = {styles.container}>
        <Image style= {styles.image}source={ {uri: props.results.image_url}}/>
        <Text style = {styles.title}>{props.results.name}</Text>
        <Text style = {styles.title}>{props.results.rating} Stars, {props.results.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    image: {
        width:250,
        height:120,
        borderRadius:4
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16
    }
});
export default ResultsDetail;
