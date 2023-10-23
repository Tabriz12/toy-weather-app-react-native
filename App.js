import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import MainTabs from "./src/components/MainTabs";
import { useGetWeather } from "./src/hooks/useGetWeather";
//

const App = () => {


  const [loading, error, weather] = useGetWeather()

  //console.log(loading, error, weather)

  if (weather && weather.list){

    return (

    
      <NavigationContainer>
  
        
        <MainTabs weather = {weather} />
  
      </NavigationContainer>
    )

  }

  else{

    return (

      <View style = {styles.loaderWrapper}>

        <ActivityIndicator size= {'large'} color={'orange'}/>

      </View>
    )
  }


  
}


const styles = StyleSheet.create({

  loaderWrapper:{
    flex:1,
    justifyContent: "center"

  }
})

export default App