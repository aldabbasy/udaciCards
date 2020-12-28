import AsyncStorage from '@react-native-community/async-storage'

const DECKS_STORAGE_KEY = 'aldabbasy.decks'

function dummyDecks() {
    return {
      Jordan: {
        title: 'Jordan',
        questions: [
          {
            question: 'Where is Jordan located?',
            answer: 'in the middle east'
          }, {
            question: 'What is the official language of jordan?',
            answer: 'Arabic'
          }
        ]
      }
    }
}

function parseDecks(results) {
  return (results) ? JSON.parse(results) : dummyDecks()
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(parseDecks)
}

export function getDeck(id) {
  return getDecks().then((decks) => (decks[id]))
}

export function saveDeckTitle(deckTitle) {
  getDecks().then((decks) => {
    if (!decks[deckTitle]) {
      decks[deckTitle] = {
        title: deckTitle,
        questions: []
      }
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
    }
  })
}

export function clearStorage() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, '')
}

export function addCardToDeck(deckTitle, {question, answer}) {
  getDecks().then((decks) => {
    if (decks[deckTitle] && decks[deckTitle]['questions']) {
      decks[deckTitle]['questions'].push({question, answer})
    }
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
  })
}