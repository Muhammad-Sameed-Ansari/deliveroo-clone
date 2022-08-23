import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { images } from '../constants'

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* CategoryCard */}
            <CategoryCard imgUrl={images.dummy_sushi} title='Testing 1'/>
            <CategoryCard imgUrl={images.dummy_sushi} title='Testing 2'/>
            <CategoryCard imgUrl={images.dummy_sushi} title='Testing 3'/>
            <CategoryCard imgUrl={images.dummy_sushi} title='Testing 4'/>
            <CategoryCard imgUrl={images.dummy_sushi} title='Testing 5'/>
            <CategoryCard imgUrl={images.dummy_sushi} title='Testing 6'/>
            <CategoryCard imgUrl={images.dummy_sushi} title='Testing 7'/>
        </ScrollView>
    )
}

export default Categories

const styles = StyleSheet.create({})