import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen name='Basket' component={BasketScreen} options={{ presentation: 'modal' }} />
            <Stack.Screen name='PreparingOrder' component={PreparingOrderScreen} options={{ presentation: 'fullScreenModal' }}/>
            <Stack.Screen name='Delivery' component={DeliveryScreen} options={{ presentation: 'fullScreenModal' }}/>
        </Stack.Navigator>
    )
}

export default StackNavigator