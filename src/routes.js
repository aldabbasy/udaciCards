import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import DeckList from './components/DeckList'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import DeckInfo from './components/DeckInfo'
import Quiz from './components/Quiz'

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Deck List" component={DeckList} />
    </Tab.Navigator>
  )
}



const Stack = createStackNavigator()

export function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="AddDeck" component={AddDeck} />
      <Stack.Screen name="DeckInfo" component={DeckInfo} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  )
}
