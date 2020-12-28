import React, { Component } from 'react';
import { View, StatusBar, AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import { registerRootComponent } from 'expo'

import Constants from 'expo-constants'

import { setLocalNotification } from './src/utils/notifications'

import { MainNavigator } from './src/routes'
import DeckList from './src/components/DeckList'
import { charcoal } from './src/utils/colors'

function FlashCardsStatusBar({ backgroundColor, ...props }){
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <FlashCardsStatusBar backgroundColor={charcoal} barStyle='light-content' />
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
          {/* <DeckList /> */}
        </View>
      </Provider>
    )
  }
}
AppRegistry.registerComponent('App', () => App)
registerRootComponent(App)