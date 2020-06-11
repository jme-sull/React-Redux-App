import { combineReducers } from 'redux'
import { allCharactersReducer } from './allCharactersReducer'
import { randomCharacterReducer } from './randomCharacterReducer'

export default combineReducers({
    allCharactersReducer,
    randomCharacterReducer
})