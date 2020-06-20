import {
    FETCH_CHARACTERS_FAIL,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_START
} from '../actions'

const initalState = {
    characters: [],
    error: '',
    isFetching: false
};

export const allCharactersReducer = (state = initalState, action) => {
    
    switch(action.type){
        case FETCH_CHARACTERS_START: 
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_CHARACTERS_FAIL:
            return {
                ...state,
                error: action.payload
            }


        default: 
            return state; 
    }
}