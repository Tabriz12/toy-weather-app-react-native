import React from "react"
import {Feather} from '@expo/vector-icons'
import { View, Text, StyleSheet } from "react-native"
import { weatherType } from "../utilities/WeatherType"
import moment from "moment"



const ListItem = (props) => {

    const {condition, min, max, dt_txt} = props

    const { items, temp, date, tempContainer, timeWrap, test} = styles

    

    return(

        <View style = {items} >

            
            
                <Feather name={weatherType[condition].icon} color={'white'} size={50}/>

                <View style = {timeWrap}>
                    <Text style = {date}> {moment(dt_txt).format('dddd')}</Text>
                    <Text style = {date}> {moment(dt_txt).format('h:mm:ss a')}</Text>
                </View>
                <View style={tempContainer}>
                    <Text style={temp}> {`${Math.round(min)}°/${Math.round(max)}°`} </Text>
                </View>
            
            
            

        </View>
    )
 
 }

const styles = StyleSheet.create({
    items: {
        backgroundColor:'pink',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
        borderWidth: 5,
        alignItems: 'center'

    },

    
    timeWrap:{
        flexDirection:'column'
    },

    

    temp:{
        color: 'white',
        fontSize: 15
    },

    date:{
        color: 'white',
        fontSize: 15
    },

    tempContainer: {
        flexDirection: 'row', // Display min and max temperatures in a row
        //justifyContent: 'space-between', // Add space between min and max temperatures
         // Take up remaining horizontal space
      }

})

 export default ListItem