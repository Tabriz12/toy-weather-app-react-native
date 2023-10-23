import React, { useState } from "react";

import { View ,Text, Button, StyleSheet} from "react-native"

const Counter = () => {

    const [count, setCount] = useState(0)

    return (

        <View style = {styles.container}>

            <Text style = {styles.title}>{`count: ${count}`}</Text>
            

            <Button color = {'blue'} 
            title = {'-'}
            disabled = {!count}
            onPress = {
                () => setCount(count-1)}/>
            
            <Button color = {'red'} title = {'+'} onPress = {
                () => setCount(count+1)}/>
            

        </View>




    )

}

const styles =  StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: 'orange'
    },

    title: {
        alignSelf:'center',
        fontSize:20,
        marginTop: 25
    }


})

export default Counter