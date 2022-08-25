import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { images } from '../constants'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { useNavigation } from '@react-navigation/native';
import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == 'featured'] {
                ...,
                restaurants[]->{
                  ...,
                  dishes[]->
                }
              }`
        ).then(data => {
            setFeaturedCategories(data)
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.headerContainer}>
                <Image 
                    style={styles.cornerLogo}
                    source={images.deliveroo_logo}
                />

                <View style={{ marginLeft: 8, flex: 1 }}>
                    <Text 
                        style={{ 
                            fontWeight: '700', 
                            color: 'rgb(156, 163, 175)',
                            fontSize: 12,
                            lineHeight: 16
                        }}
                    >Deliver Now!</Text>
                    <Text
                        style={{ 
                            fontWeight: '700', 
                            fontSize: 20,
                            lineHeight: 28
                        }}
                    >Current Location<AntDesign name="down" size={20} color="#00CCBB" />
                    </Text>
                </View>
                <AntDesign name="user" size={35} color="#00CCBB" />
            </View>

            {/* Search */}
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <AntDesign name="search1" size={20} color="gray" />
                    <TextInput 
                        placeholder='  Restaurants and cuisines'
                        keyboardType='default'
                    />
                </View>

                <Entypo name="sound-mix" size={24} color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView 
                contentContainerStyle={{
                    paddingBottom: 100
                }}
                style={styles.bodyContainer}
            >
                {/* Categories */}
                <Categories />
                
                {/* Featured */}

                {featuredCategories?.map(category => (
                    <FeaturedRow 
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.shortDescription}
                    />
                ))}
        
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20
    },
    headerContainer: {
        flexDirection: 'row',
        paddingBottom: 12,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        paddingBottom: 8,
        marginHorizontal: 16
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(229, 231, 235)',
        padding: 12,
        marginHorizontal: 8
    },
    cornerLogo: {
        width: 28,
        height: 28,
        padding: 16,
        backgroundColor: 'rgb(209, 213, 219)',
        borderRadius: 999

    },
    bodyContainer: {
        backgroundColor: 'rgb(243, 244, 246)',
    },
})