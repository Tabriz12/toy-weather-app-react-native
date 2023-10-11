import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const WeatherApp = () => {


  const {container, temp, feels, highLow, highLowWrapper, bodyWrapper, description} = styles
  return (
    
      <View style = {container}>

        <Text> Current Weather</Text>
        <Text style = {temp}> 8°</Text>
        <Feather name="sun" size={80} color="black" />
        <Text style = {feels}>Feels like 5°</Text>
        <View style = {highLowWrapper}>
          <Text style = {highLow}>High: 9° </Text>
          <Text style = {highLow}>Low: 6°</Text>

        </View>
        <View style = {bodyWrapper}>
          <Text style = {description}> It is a nice weather</Text>
        </View>
        
      </View>
      

    
   
  )

}

const styles  = StyleSheet.create({
  container : {
    backgroundColor:'pink',
    flex: 1,
    alignItems: 'center',
    padding:25
  },

  wrapper: {
    flex: 1
  },

  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },

  highLow: {
    fontSize: 20,
    color: 'black'
  },

  description: {
    fontSize: 48,
    textAlign: 'center'
  },

  highLowWrapper: {
    flexDirection: 'row'
  },

  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  }



})

export default WeatherApp


