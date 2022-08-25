import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity style={{ position: 'relative', marginRight: 8 }}>
            <Image 
                source={{ uri: imgUrl}}
                style={{
                    height: 80,
                    width: 80,
                    borderRadius: 4
                }}
            />
            <Text style={styles.titleStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    titleStyle: {
        position: 'absolute',
        bottom: 4,
        left: 4,
        color: 'white',
        fontWeight: '700'
    }
})