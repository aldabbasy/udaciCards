import React, {Component} from 'react'
import { TextInput, View, StyleSheet} from 'react-native'

import {connect} from 'react-redux'
import {white, lightGray} from '../utils/colors'

import {addDeck} from '../actions'
import {saveDeckTitle} from '../utils/api'

import FormButtons from './FormButtons'

class AddDeck extends Component {
  state = {
    title: ""
  }

  submit = () => {
    const {title} = this.state
    const {addDeck} = this.props
    if (title) {
      addDeck(title) // Redux
      saveDeckTitle(title) // db
      this.toHome() // navigate to Decks list
    }
    else{
        alert('must fill all fields!!!')
    }
  }

  reset = () => {
    this.setState({title: ""})
    this.toHome()
  }

  toHome() {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput underlineColorAndroid={'transparent'} style={styles.deckTitle} editable={true} maxLength={50} placeholder="Deck Title" onChangeText={(title) => this.setState({title})}/>
        <FormButtons onSubmit={this.submit} onCancel={this.reset} submitBtnText={'Add Deck'} cancelBtnText={'Go Back'}/>
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
  deckTitle: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: lightGray
  }
})

function mapStateToProps(decks) {
  return {decks}
}
export default connect(mapStateToProps, {addDeck})(AddDeck)