import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from "../utilities/WeatherType";

const WeatherApp = ({weatherData}) => {


  const {container, tempStyles, feels, highLow, highLowWrapper, bodyWrapper, description} = styles
  const {main: {temp, feels_like, temp_max, temp_min}, weather } = weatherData

  const weatherCondition = weather[0].main

  console.log(weatherData)
  return (
    
      <View style = {[container, {backgroundColor: weatherType[weatherCondition].color}]}>

        <Text style = {{fontSize:24}}> Current Weather</Text>

        <Text style = {tempStyles}> {`${temp}°`}</Text>

        <Feather name={weatherType[weatherCondition].icon} size={80} color="white" />

        <Text style = {feels}>{`Feels like ${feels_like}°`}</Text>

        <View style = {highLowWrapper}>

          <Text style = {highLow}>{`High: ${temp_max}°`} </Text>
          <Text style = {highLow}>{`Low: ${temp_min}°`}</Text>

        </View>

        <View style = {bodyWrapper}>
          <Text style = {description}> {weather[0].description} </Text>
        </View>
        
      </View>
      

    
   
  )

}

const styles  = StyleSheet.create({
  container : {
    
    flex: 1,
    alignItems: 'center',
    padding:25
  },

  wrapper: {
    flex: 1
  },

  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },

  highLow: {
    fontSize: 25,
    color: 'black'
  },

  description: {
    fontSize: 36,
    textAlign: 'center'
  },

  highLowWrapper: {
    flexDirection: 'row',
    marginTop:25

  },

  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginTop: 25
  }



})

export default WeatherApp


