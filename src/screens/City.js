import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import IconText from "../components/IconText";
import moment from "moment";


const City = ({cityInfo}) => {

    const {container, allComps, imageLayout, suns, cityText, popStyle } = styles
    const {name, country, population, sunrise, sunset} = cityInfo
    
    return (

        <View style = {container} >
            <ImageBackground source={require("../../assets/asia-3713473_1920.jpg")} 
            style={imageLayout} >

                <View style = {allComps}>

                    <Text style = {cityText}>{`${name}, ${country}`}</Text>
                    
                    <IconText iconName = {'user'} 
                      iconSize = {50}
                      iconColor = {'white'}
                      text = {population} 
                      itemStyle = {popStyle}/>

                    <View style= {suns}>

                        <IconText 
                        iconName = {'sunrise'} 
                        iconSize = {50} 
                        iconColor = {'white'} 
                        text = {moment.unix(sunrise).format('hh:mm a')}></IconText>
                        <IconText 
                        iconName = {'sunset'} 
                        iconSize = {50} 
                        iconColor = {'white'} 
                        text = {moment.unix(sunset).format('hh:mm a')}></IconText>
                    
                    </View>


                </View>
                

            </ImageBackground>

        </View>



    )

}


const styles = StyleSheet.create({

    container: {

        flex:1,
        
    },


    imageLayout:{
        flex:1,
        
    },
    allComps: {
        paddingTop:25,
        justifyContent:'center',
        alignItems:'center',  

    },

    suns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20,
        width: '80%'


    },

    cityText: {
        marginTop: 25,
        fontSize:30,
        color: 'white'
    },
    popStyle: {
        flexDirection: 'row',
        marginTop:25

    }



})

export default City