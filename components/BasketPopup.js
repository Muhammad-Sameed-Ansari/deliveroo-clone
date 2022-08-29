import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketPopup = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

    if (items.length === 0) return null

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Basket')} style={styles.touchContainer}>
                <Text style={styles.itemsCountText}>{items.length}</Text>
                <Text style={styles.viewBasketText}>View Basket</Text>
                <Text style={styles.totalAmountText}>Rs.{basketTotal}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketPopup

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        zIndex: 50
    },
    touchContainer: {
        backgroundColor: '#00CCBB',
        marginHorizontal: 20,
        padding: 16,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemsCountText: {
        color: 'white',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '800',
        backgroundColor: '#01A296',
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    viewBasketText: {
        flex: 1,
        color: 'white',
        fontWeight: '800',
        fontSize: 18,
        lineHeight: 28,
        textAlign: 'center'
    },
    totalAmountText: {
        fontSize: 18,
        lineHeight: 28,
        color: 'white',
        fontWeight: '800',
    }
})