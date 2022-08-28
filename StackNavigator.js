import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen name='Basket' component={BasketScreen} options={{ presentation: 'modal' }} />
        </Stack.Navigator>
    )
}

export default StackNavigator