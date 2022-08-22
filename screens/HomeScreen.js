import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { UserIcon, SearchIcon, AdjustmentsIcon, ChevronDownIcon } from 'react-native-heroicons/solid'
import { images } from '../constants'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image 
                    style={styles.cornerLogo}
                    source={images.deliveroo_logo}
                />

                <View style={{ marginLeft: 8 }}>
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
                    >Current Location
                    <ChevronDownIcon />
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    headerContainer: {
        flexDirection: 'row',
        paddingBottom: 12,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    cornerLogo: {
        width: 28,
        height: 28,
        padding: 16,
        backgroundColor: 'rgb(209, 213, 219)',
        borderRadius: 999

    }
})