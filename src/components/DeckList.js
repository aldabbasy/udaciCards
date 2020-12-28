import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {getDecks} from '../utils/api'
import {recieveDecks} from '../actions'
import AppLoading from 'expo-app-loading'
import {white, halfGray} from '../utils/colors'
import { FAB } from 'react-native-paper'
import Deck from './Deck'

class DeckList extends Component {

    state = {
    ready: false
    }

    componentDidMount() {
        const {recieveDecks} = this.props
        getDecks().then((decks) => recieveDecks(decks)).then(() => this.setState(() => ({ready: true})))
    }
    keyExtractor = (item, index) => item.title

    onPressItem = (item) => {
        this.props.navigation.navigate('DeckInfo', {deckTitle: item.title})
        //alert(item.title)
    }

    renderItem = ({item}) => {
        return (
          <TouchableOpacity style={styles.item} onPress={() => this.onPressItem(item)}>
            <Deck id={item.title} title={item.title} questions={item.questions}/>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )
      }

    render() {
        const {decks} = this.props
        const listOfDecks = Object.values(decks)

        if (!this.state.ready) {
            return (<AppLoading/>)
        }

        return (
            <Fragment>
                <FlatList style={styles.container} data={listOfDecks} extraData={this.state} keyExtractor={this.keyExtractor} renderItem={this.renderItem}/>
                <FAB style={styles.fab}  icon="plus" onPress={() => this.props.navigation.navigate('AddDeck')} />
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 15
    },
    item: {
        backgroundColor: white,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: halfGray
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      }
})

function mapStateToProps(decks) {
    return {decks}
}
export default connect(mapStateToProps, {recieveDecks})(DeckList)