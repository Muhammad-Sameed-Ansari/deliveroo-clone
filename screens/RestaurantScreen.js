import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons'; 
import DishRow from '../components/DishRow';
import BasketPopup from '../components/BasketPopup';

const RestaurantScreen = () => {
    const { params: {
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
    }} = useRoute()
    const navigation = useNavigation()
 
    return (
        <>
            <BasketPopup />

            <ScrollView>
                <View style={styles.headerContainer}>
                    <Image
                        style={styles.headerImage} 
                        source={{
                            uri: urlFor(imgUrl).url()
                        }}
                    />
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        style={styles.backArrow}
                    >
                        <AntDesign name="arrowleft" size={20} color="#00CCBB" />
                    </TouchableOpacity>
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.titleText}>{title}</Text>
                        <View style={styles.ratingLocationContainer}>
                            <View style={styles.ratingContainer}>
                                <FontAwesome name="star" size={22} color="#009C5B" style={{ marginRight: 8 }}/>
                                <Text style={styles.ratingLocationText}>
                                    <Text style={{ color: '#009C5B'}}>{rating}</Text> · {genre}
                                </Text>
                            </View>

                            <View style={styles.ratingContainer}>
                                <Ionicons name="location" size={22} color="gray" style={{ marginRight: 8 }}/>
                                <Text style={styles.ratingLocationText}>Nearby · {address}</Text>
                            </View>
                        </View>

                        <Text style={styles.descriptionText}>{shortDescription}</Text>
                    </View>

                    <TouchableOpacity style={styles.allergyConatiner}>
                        <AntDesign name="questioncircleo" size={22} color="gray" />
                        <Text style={styles.allergyText}>Have a food allergy?</Text>
                        <AntDesign name="right" size={22} color="#00CCBB" />
                    </TouchableOpacity>
                </View>

                <View style={styles.dishRow}>
                    <Text style={styles.menuText}>Menu</Text>

                    {dishes.map((dish) => (
                        <DishRow 
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.shortDescription}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                    

                </View>
            </ScrollView>
        </>
    )
}

export default RestaurantScreen

const styles = StyleSheet.create({
    headerContainer: {
        position: 'relative'
    },
    headerImage: {
        width: '100%',
        height: 224,
        padding: 16,
        backgroundColor: 'rgb(209, 213, 219)'
    },
    backArrow: {
        position: 'absolute',
        top: 56,
        left: 20,
        padding: 8,
        backgroundColor: 'rgb(243, 244, 246)',
        borderRadius: 999
    },
    bodyContainer: {
        backgroundColor: 'white'
    },
    detailsContainer: {
        paddingHorizontal: 16,
        paddingTop: 16
    },
    titleText: {
        fontSize: 30,
        lineHeight: 36,
        fontWeight: '700'
    },
    ratingLocationContainer: {
        flexDirection: 'row',
        marginVertical: 4
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8
    },
    ratingLocationText: {
        color: 'rgb(156, 163, 175)'
    },
    descriptionText: {
        color: 'rgb(107, 114, 128)',
        paddingBottom: 16,
        marginTop: 8
    },
    allergyConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        justifyContent: 'space-between',
        borderTopWidth: 0.5,
        borderTopColor: 'rgb(209, 213, 219)'
    },
    allergyText: {
        flex: 1,
        marginLeft: 16,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '700'
    },
    menuText: {
        paddingHorizontal: 16,
        paddingTop: 24,
        marginBottom: 12,
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 28
    },
    dishRow: {
        paddingBottom: 144
    }
})