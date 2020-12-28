import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {black, gray} from '../utils/colors'

function Deck({title, questions, bigFonts}) {
    return (
        <View style={styles.container}>
            <Text style={[
            styles.title, (bigFonts)
            ? {
                fontSize: 36
            }
            : ''
            ]}>{title}</Text>
            <Text style={[
            styles.count, (bigFonts)
            ? {
                fontSize: 24
            }
            : ''
            ]}>{questions.length}
            {' '}cards</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    title: {
      color: black,
      fontSize: 24,
      textAlign: 'center'
    },
    count: {
      color: gray,
      fontSize: 16,
      textAlign: 'center'
    }
})

export default Deck;

