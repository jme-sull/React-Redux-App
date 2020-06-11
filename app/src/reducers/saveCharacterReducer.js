import { SAVE_CHARACTER } from '../actions/saveCharacterAction'

const initalState = {
    savedCharacters: []
}

export const saveCharactersReducer = ( state = initalState, action ) => {

    switch(action.type){
        case SAVE_CHARACTER: 
            return {
                ...state,
                savedCharacters: [
                    ...state.savedCharacters,
                    action.payload
                ]
            }
            default:
                return state

    }
}