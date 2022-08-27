import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { AntDesign } from '@expo/vector-icons'; 

const DishRow = ({ id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)

    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)} style={styles.container}>
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
                        <TouchableOpacity style={{ marginRight: 8 }}>
                            <AntDesign name="minuscircle" size={40} color="blue" />
                        </TouchableOpacity>

                        <Text style={{ marginRight: 8 }} >0</Text>

                        <TouchableOpacity>
                            <AntDesign name="pluscircle" size={40} color="bluw" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}

export default DishRow

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 16,
        borderColor: 'rgb(229, 231, 235)'
    },
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