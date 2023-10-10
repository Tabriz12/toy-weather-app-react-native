import React from "react";

import { View, Text, StyleSheet } from "react-native";

import {Feather} from '@expo/vector-icons'


const IconText = (props) => {

    const {iconName, iconSize, iconColor, text} = props

    return(

        <View style={styles.container}>
            
            <Feather name= {iconName} size = {iconSize} color = {iconColor}/>
            <Text style = {styles.textstyle}>{text}</Text>

        </View>
        
    )



}


styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        alignItems:'center',
        

    },

    textstyle:{

        fontSize:30,
        color:'white'
    }
})

export default IconText