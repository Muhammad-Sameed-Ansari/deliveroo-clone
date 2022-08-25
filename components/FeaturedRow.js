import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import RestaurantCard from './RestaurantCard';
import { images } from '../constants'
import sanityClient from '../sanity';

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == 'featured' && _id == $id] {
                ...,
                restaurants[]->{
                  ...,
                  dishes[]->,
                  type-> {
                    name
                  }
                }
              }[0]`, { id }
        ).then(data => {
            setRestaurants(data?.restaurants)
        })
    }, [id])

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={{ fontWeight: '700', fontSize: 18, lineHeight: 28 }}>{title}</Text>
                <AntDesign name="arrowright" size={24} color="#00CCBB" />
            </View>

            <Text style={styles.descriptionText}>{description}</Text>

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingTop: 16 }}
            >
                {/* RestaurantCards */}

                {restaurants?.map(restaurant => (
                    <RestaurantCard 
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        shortDescription={restaurant.shortDescription}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
                
            </ScrollView>
        </View>
    )
}

export default FeaturedRow

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    descriptionText: {
        fontSize: 12,
        lineHeight: 16,
        color: 'rgb(107, 114, 128)',
        paddingHorizontal: 16
    }
})