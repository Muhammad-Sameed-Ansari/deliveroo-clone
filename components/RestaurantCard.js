import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons'; 
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';


const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    long,
    lat
}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('Restaurant', {
                id,
                imgUrl,
                title,
                rating,
                genre,
                address,
                shortDescription,
                dishes,
                long,
                lat
            })}
            style={styles.cardContainer}
        >
            <Image 
                source={{ uri: urlFor(imgUrl).url() }}
                style={styles.cardImage}
            />

            <View style={styles.textContainer}>
                <Text style={styles.titleText}>{title}</Text>

                <View style={styles.ratingContainer}>
                    <FontAwesome name="star" size={22} color="rgb(22, 101, 52)"/>
                    <Text style={styles.ratingText}>
                        <Text style={{ color: 'rgb(22, 101, 52)'}}>{rating}</Text> · {genre}
                    </Text>
                </View>

                <View style={styles.locationContainer}>
                    <SimpleLineIcons name="location-pin" size={22} color="gray" />
                    <Text style={styles.locationText}>Nearby · {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        marginRight: 12,
        shadowColor: '#0000001A',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    cardImage: {
        height: 144,
        width: 256,
        borderRadius: 2
    },
    textContainer: {
        paddingHorizontal: 12,
        paddingBottom: 16
    },
    titleText: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 28,
        paddingTop: 8
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingText: {
        marginLeft: 8,
        color: 'rgb(107, 114, 128)',
        fontSize: 12,
        lineHeight: 16
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationText: {
        marginLeft: 8,
        fontSize: 12,
        lineHeight: 16,
        color: 'rgb(107, 114, 128)'
    }
})