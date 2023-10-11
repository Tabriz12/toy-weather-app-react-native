import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import IconText from "../components/IconText";


const City = () => {

    const {container, allComps, imageLayout, suns, cityText, popStyle } = styles
    return (

        <View style = {container} >
            <ImageBackground source={require("../../assets/asia-3713473_1920.jpg")} 
            style={imageLayout} >

                <View style = {allComps}>

                    <Text style = {cityText}>Tokyo</Text>
                    
                    <IconText iconName = {'user'} 
                      iconSize = {50}
                      iconColor = {'white'}
                      text = {'3.4M'} 
                      itemStyle = {popStyle}></IconText> 

                    <View style= {suns}>

                        <IconText iconName = {'sunrise'} iconSize = {50} iconColor = {'white'} text = {'6:43 AM'}></IconText>
                        <IconText iconName = {'sunset'} iconSize = {50} iconColor = {'white'} text = {'8:28 PM'}></IconText>
                    
                    </View>

                    


                </View>
                

            </ImageBackground>





        </View>



    )

}


styles = StyleSheet.create({

    container: {

        flex:1,
        
    },
    imageLayout:{
        flex:1,
        width: '100%',
        height: '100%'
        //
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