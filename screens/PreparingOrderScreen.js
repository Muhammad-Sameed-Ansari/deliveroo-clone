import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { images } from '../constants'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 4000)
    }, [])
    

    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={images.order_loading}
                style={{ height: 384, width: 384}}
            />

            <Text style={styles.waitingText}>Waiting for Restaurant to accept your order!</Text>

            {/* <Progress.Circle size={60} indeterminate={true} color='white' /> */}
        </SafeAreaView>
    )
}

export default PreparingOrderScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00CCBB',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    waitingText: {
        color: 'white',
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        marginVertical: 40,
        fontWeight: '700'
    }
})