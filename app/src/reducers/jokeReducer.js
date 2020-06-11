import {
    FETCH_JOKE_START,
    FETCH_JOKE_SUCCESS,
    FETCH_JOKE_FAIL
} from '../actions'

const initalState = {
    joke: [],
    error: '',
    isFetching: false
};

export const jokeReducer = (state = initalState, action) => {
    
    switch(action.type){
        case FETCH_JOKE_START: 
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_JOKE_SUCCESS:
            return {
                ...state,
                joke: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_JOKE_FAIL:
            return {
                ...state,
                error: action.payload
            }


        default: 
            return state; 
    }
}