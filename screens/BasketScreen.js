import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { Entypo } from '@expo/vector-icons'; 
import { images } from '../constants'
import { urlFor } from '../sanity'
import { removeFromBasket } from '../features/basketSlice'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const dispatch = useDispatch()
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results
        }, {})

        setGroupedItemsInBasket(groupedItems)
    }, [items])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, backgroundColor: 'rgb(243, 244, 246)'}}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.basketText}>Basket</Text>
                        <Text style={styles.restaurantTitle}>{restaurant.title}</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.crossBtn}>
                        <Entypo name="circle-with-cross" size={45} color="#00CCBB" />
                    </TouchableOpacity>
                </View>

                <View style={styles.deliveryTimeContainer}>
                    <Image 
                        style={styles.cornerLogo}
                        source={images.deliveroo_logo}
                    />

                    <Text style={{ flex: 1, marginRight: 16 }}>Deliver in 50-60 min</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#00CCBB'}}>Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    {Object.entries(groupedItemsInBasket).map(([key, items]) =>(
                        <View key={key} style={styles.itemRow}>
                            <Text style={{ marginRight: 12, color: '#00CCBB' }}>{items.length} x</Text>
                            <Image 
                                source={{ uri: urlFor(items[0]?.image).url() }}
                                style={styles.itemImage}
                            />
                            <Text style={{ flex: 1, marginRight: 12 }}>{items[0]?.name}</Text>
                            <Text style={{ color: 'rgb(75, 85, 99)', marginRight: 12 }}>Rs.{items[0]?.price}</Text>

                            <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: key }))}>
                                <Text style={{ color: '#00CCBB', fontSize: 12, lineHeight: 16}}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.totalContainer}>
                    <View style={styles.totalRow}>
                        <Text style={{ color: 'rgb(156, 163, 175)' }}>Subtotal</Text>
                        <Text style={{ color: 'rgb(156, 163, 175)' }}>Rs.{basketTotal}</Text>
                    </View>
                    
                    <View style={styles.totalRow}>
                        <Text style={{ color: 'rgb(156, 163, 175)' }}>Delivery Fee</Text>
                        <Text style={{ color: 'rgb(156, 163, 175)' }}>Rs.100</Text>
                    </View>

                    <View style={styles.totalRow}>
                        <Text>Order Total</Text>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Rs.{basketTotal + 100}</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('PreparingOrder')} style={styles.placeOrderBtn}>
                        <Text style={styles.placeOrderText}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen

const styles = StyleSheet.create({
    headerContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#00CCBB',
        backgroundColor: 'white'
    },
    basketText: {
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '700',
        textAlign: 'center'
    },
    restaurantTitle: {
        textAlign: 'center',
        color: 'rgb(156, 163, 175)'
    },
    crossBtn: {
        position: 'absolute',
        top: 12,
        right: 20
    },
    cornerLogo: {
        width: 28,
        height: 28,
        padding: 16,
        backgroundColor: 'rgb(209, 213, 219)',
        borderRadius: 999,
        marginRight: 16
    },
    deliveryTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'white',
        marginVertical: 20
    },
    itemImage: {
        height: 48,
        width: 48,
        borderRadius: 999,
        marginRight: 12
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderColor: 'rgb(229, 231, 235)'
    },
    totalContainer: {
        padding: 20,
        backgroundColor: 'white',
        marginTop: 20
    },
    totalRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 16
    },
    placeOrderBtn: {
        borderRadius: 8,
        backgroundColor: '#00CCBB',
        padding: 16
    },
    placeOrderText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '700'
    }
})