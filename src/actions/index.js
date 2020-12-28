export const RECIEVE_DECKS = 'RECIEVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const recieveDecks = decks => ({type: RECIEVE_DECKS, decks})
export const addDeck = deckTitle => ({type: ADD_DECK, deckTitle})
export const addCard = (deckTitle, card) => ({type: ADD_CARD, deckTitle, card})