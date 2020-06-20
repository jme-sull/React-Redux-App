import { combineReducers } from 'redux'
import { allCharactersReducer } from './allCharactersReducer'
import { randomCharacterReducer } from './randomCharacterReducer'
import { saveCharactersReducer  } from './saveCharacterReducer'

export default combineReducers({
    allCharactersReducer,
    randomCharacterReducer,
    saveCharactersReducer 
})