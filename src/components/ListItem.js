import React from "react"
import {Feather} from '@expo/vector-icons'
import { View, Text, StyleSheet } from "react-native"


const ListItem = (props) => {

    const {condition, min, max, dt_txt} = props

    const { item, temp, date, tempContainer} = styles

    return(

        <View style = {item}>

            <Feather name={'sun'} color={'white'} size={50}/>
            <Text style = {date}> {dt_txt}</Text>
            <View style={tempContainer}>
                <Text style={temp}> {min} </Text>
                <Text style={temp}>{max}</Text>
            </View>
            
            
            

        </View>
    )
 
 }

const styles = StyleSheet.create({
    item: {
        backgroundColor:'pink',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
        borderWidth: 5,
        alignItems: 'center'

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
        justifyContent: 'space-between', // Add space between min and max temperatures
        flex: 1, // Take up remaining horizontal space
      }

})

 export default ListItem