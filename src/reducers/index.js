import {RECIEVE_DECKS, ADD_DECK, ADD_CARD} from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case RECIEVE_DECKS:
    {
      return {
        ...state,
        ...action.decks
      }
    }
    case ADD_DECK:
    {
      const result = {
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: []
        }
      }
      return result
    }
    case ADD_CARD:
    {
      const result = {
        ...state
      }
      if (result[action.deckTitle]) {
        const {question, answer} = action.card
        result[action.deckTitle].questions.push({question, answer})
      }
      return result
    }
    default: {
      return state
    }
  }
}

export default decks