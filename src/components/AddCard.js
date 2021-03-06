import React, {Component} from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

import {connect} from 'react-redux'
import {black, white, lightGray} from '../utils/colors'

import FormButtons from './FormButtons'

import {addCardToDeck} from '../utils/api'
import {addCard} from '../actions'

class AddCard extends Component {

    state = {
        question: '',
        answer: ''
    }
    submit = () => {
        const {question, answer} = this.state
        const {addCard, deck, goBack} = this.props
        if (question && answer) {
            addCard(deck.title, {question, answer}) // Redux
            addCardToDeck(deck.title, {question, answer}) // db
            goBack()
        }
        else{
            alert('all fields must be filled!!!')
        }
    }
    
    reset = () => {
        this.setState({question: '', answer: ''})
        this.props.goBack()
    }

    render() {
        const {deck} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{deck.title}</Text>
                <TextInput style={styles.question} underlineColorAndroid={'transparent'} editable={true} maxLength={100} placeholder="Enter the question here" onChangeText={(question) => this.setState({question})}/>
                <TextInput style={styles.answer} underlineColorAndroid={'transparent'} editable={true} maxLength={200} multiline={true} placeholder="Enter the answer here" onChangeText={(answer) => this.setState({answer})}/>
                <FormButtons onSubmit={this.submit} onCancel={this.reset} submitBtnText={'Add Card'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white,
      padding: 20
    },
    title: {
      color: black,
      fontSize: 24,
      textAlign: 'center'
    },
    question: {
      marginTop: 10,
      marginBottom: 10,
      padding: 10,
      paddingTop: 5,
      paddingBottom: 5,
      borderWidth: 1,
      borderColor: lightGray,
      borderRadius: 4
    },
    answer: {
      marginTop: 10,
      marginBottom: 10,
      padding: 10,
      paddingTop: 5,
      paddingBottom: 5,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: lightGray,
      height: 70
    }
})

function mapStateToProps(decks, {route}) {
    const {deckTitle} = route.params
    return {
        deck: decks[deckTitle] || {}
    }
}
  
function mapDispatchToProps(dispatch, {navigation, route}) {
    const {deckTitle} = route.params
    return {
        goBack: () => navigation.goBack(),
        addCard: (deckTitle, card) => dispatch(addCard(deckTitle, card))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCard)