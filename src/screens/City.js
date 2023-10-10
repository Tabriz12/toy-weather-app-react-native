import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import IconText from "../components/IconText";


const City = () => {


    return (

        <View style = {styles.container} >
            <ImageBackground source={require("../../assets/wallpaperflare_wallpaper.jpg")} style={styles.imageLayout}>

                <View style = {styles.comps}>

                    
                    <IconText iconName = {'user'} iconSize = {50} iconColor = {'white'} text = {'3.2M'}></IconText>


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
        flex:1
    },
    comps: {
        paddingTop:25,
        alignItems:'center',
        flex:1

    }



})

export default City