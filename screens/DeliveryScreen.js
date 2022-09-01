import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { Entypo } from '@expo/vector-icons'; 

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Entypo name="cross" size={30} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.orderHelpText}>Order Help</Text>
                </View>

                <View style={styles.estimatedTimeContainer}>
                    <Text style={styles.estimatedText}>Estimated Arrival</Text>
                    <Text style={styles.timeText}>45-55 Minutes</Text>
                    
                    
                </View>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00CCBB'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    orderHelpText: {
        fontWeight: '300',
        color: 'white',
        fontSize: 18,
        lineHeight: 28
    },
    estimatedTimeContainer: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 8,
        borderRadius: 6,
        padding: 24,
        zIndex: 50,
        shadowColor: '#0000001A',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    estimatedText: {
        fontSize: 18,
        lineHeight: 28,
        color: 'rgb(156, 163, 175)'
    },
    timeText: {
        fontSize: 36,
        lineHeight: 40,
        fontWeight: '700'
    }
})