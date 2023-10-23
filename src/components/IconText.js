import React from "react";

import { View, Text, StyleSheet } from "react-native";

import {Feather} from '@expo/vector-icons'


const IconText = (props) => {

    const {iconName, iconSize, iconColor, text, itemStyle } = props

    const {container, txtTheme} = styles

    return(

        <View style = {[container, itemStyle]}>
            
            <Feather name= {iconName} size = {iconSize} color = {iconColor}/>
            <Text style = {txtTheme }>{text}</Text>
            

        </View>
        
    )



}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        
    },

    txtTheme:{
        fontSize:20,
        color:'white',
    }
})

export default IconText