import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ListItem from "../components/ListItem";


const UpcomingWeather = (weatherData) => {



    const renderItem = ({item}) => (

        <ListItem 


        condition = {item.weather[0].main} 
        dt_txt = {item.dt_txt}
        min = {item.main.temp_min}
        max = {item.main.temp_max}
        />

    )

    const {container} = styles

    return(

        <View style= {container}>
            
            <Text> Upcoming Weathers </Text>

            <FlatList data={weatherData.weatherData}
            renderItem={renderItem}
            keyExtractor={item => item.dt_txt}
            
            />

        </View>
    )
}


const styles = StyleSheet.create({

    container: {

        flex:1,
        paddingTop:25,
        backgroundColor: 'red'

       
    }

})

export default UpcomingWeather