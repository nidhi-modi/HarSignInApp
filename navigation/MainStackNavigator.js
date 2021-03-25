import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, Platform, Alert, Linking, View } from 'react-native'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'


const Stack = createStackNavigator();

function MainStackNavigator() {


    return (


        <NavigationContainer>



            <Stack.Navigator
                initialRouteName='Home'

                screenOptions={{
                    //gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: '#2C903D'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTintColor: 'white',
                    headerBackTitleVisible: false
                }

                }



                headerMode='float'>

                <Stack.Screen name='Home' component={Home} options={{ headerShown: false, title: 'T&G Global' }} />

            </Stack.Navigator>

        </NavigationContainer >



    )
}

const styles = StyleSheet.create({


    headerLeftStyle: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 8,
        
    },

    alignTextView: {

        flexDirection: 'column'
    },

    headerLeftTopStyle: {
        color: '#BBB3B3',
        fontSize: 18,
        marginLeft: 8,
        marginBottom: 8

    },

    headerRightStyle: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        marginRight: 10
    },



})



export default MainStackNavigator