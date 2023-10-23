import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import CurrentWeather from "../screens/CurrentWeather"
import UpcomingWeather from "../screens/UpcomingWeather"
import City from "../screens/City"
import {Feather} from "@expo/vector-icons"


const MainTabs = ({weather}) => {

    const Tab = createBottomTabNavigator() //
    

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'black',
                tabBarStyle:{
                    backgroundColor: 'lightblue'
                },
                headerStyle: {
                    backgroundColor: 'white'

                },
                headerTitleStyle:{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: 'tomato'
                }

            }}>

                <Tab.Screen 
                name = {'city'} 
                options={{
                tabBarIcon: ({focused}) => (<Feather name="home" size={25} color = {focused ? 'tomato' : 'black'}/>)
                }}>
                    {() => <City cityInfo = {weather.city}/>}

                </Tab.Screen>

                <Tab.Screen 
                name = {'current'} 
                
                options={{
                tabBarIcon: ({focused}) => (<Feather name="droplet" size={25} color = {focused ? 'tomato' : 'black'}/>)
                }}> 

                {() => <CurrentWeather weatherData = {weather.list[0]}  />}
                </Tab.Screen>

                <Tab.Screen 
                name = {'upcoming'} 
                options={{
                tabBarIcon: ({focused}) => (<Feather name="clock" size={25} color = {focused ? 'tomato' : 'black'}/>)
                }}>
                    {() => <UpcomingWeather weatherData = {weather.list}/>}
                </Tab.Screen>
        

      </Tab.Navigator>
        
    )
}


export default MainTabs