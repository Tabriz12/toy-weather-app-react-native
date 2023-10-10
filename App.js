import React from "react";
import { View, StyleSheet, Text } from "react-native";
import WeatherApp from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";


const App = () => {

  return (

    

    <View style ={styles.container}>
      

      <City/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})

export default App