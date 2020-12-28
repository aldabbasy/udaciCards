import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {black, blue} from '../utils/colors'

export default class Card extends Component {

    state = {
        showAnswer: false
    }

    reset() {
        this.setState({showAnswer: false})
    }

    flipCard = () => {
        let invert = !this.state.showAnswer
        this.setState({showAnswer: invert})
    }

    render() {
        const {card} = this.props;
        const {showAnswer} = this.state

        return (
            <View style={[styles.container]}>
                {!showAnswer ? (
                    <View style={styles.flipCard}>
                        <Text style={styles.content}>{card.question}</Text>
                    </View>) 
                : (
                    <View style={styles.flipCard}>
                        <Text style={styles.content}>{card.answer}</Text>
                    </View>
                )}
                
                <TouchableOpacity style={{color: blue}} onPress={() => this.flipCard()}>
                    <Text style={styles.btnText}>{"Show " + (showAnswer ? 'Question' : 'Answer')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    flipCard: {
      height: 250,
      marginLeft: 5,
      marginRight: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      color: black,
      fontSize: 44,
      textAlign: 'center'
    },
    btnText: {
        color: blue,
        fontSize: 22,
        textAlign: 'center'
    }
})