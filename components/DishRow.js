import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { Entypo } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice';

const DishRow = ({ id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)
    const items = useSelector((state) => selectBasketItemsWithId(state, id))
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return
        dispatch(removeFromBasket({ id }))
    }

    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)} style={styles.container(isPressed)}>
                <View style={styles.dishContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>{name}</Text>
                        <Text style={styles.descriptionText}>{description}</Text>
                        <Text style={styles.priceText}>Rs.{price}</Text>
                    </View>

                    <View>
                        <Image 
                            style={styles.dishImage}
                            source={{ uri: urlFor(image).url() }}  
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && (
                <View style={styles.counterContainer}>
                    <View style={styles.innerContainer}>
                        <TouchableOpacity 
                            disabled={!items.length}
                            onPress={removeItemFromBasket} 
                            style={{ marginRight: 8 }}
                        >
                            <Entypo 
                                name="circle-with-minus" 
                                size={40} 
                                color={items.length > 0 ? "#00CCBB" : 'gray'} 
                            />
                        </TouchableOpacity>

                        <Text>{items.length}</Text>

                        <TouchableOpacity onPress={addItemToBasket} style={{ marginLeft: 8 }}>
                            <Entypo name="circle-with-plus" size={40} color="#00CCBB" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}

export default DishRow

const styles = StyleSheet.create({
    container: (isPressed) => ({
        backgroundColor: 'white',
        borderWidth: isPressed ? 0 : 1,
        padding: 16,
        borderColor: 'rgb(229, 231, 235)'
    }),
    nameText: {
        fontSize: 18,
        lineHeight: 28,
        marginBottom: 4
    },
    descriptionText: {
        color: 'rgb(156, 163, 175)'
    },
    priceText: {
        color: 'rgb(156, 163, 175)',
        marginTop: 8
    },
    dishImage: {
        width: 80,
        height: 80,
        padding: 16,
        borderWidth: 1,
        borderColor: '#F3F3F4'
    },
    dishContainer: {
        flexDirection: 'row'
    },
    textContainer: {
        flex: 1,
        paddingRight: 8
    },
    counterContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 16
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 12
    }
})