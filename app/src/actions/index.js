import axios from 'axios'

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START'
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS'
export const FETCH_CHARACTERS_FAIL = 'FETCH_CHARACTERS_FAIL'

export const FETCH_RANDOM_CHARACTER_START = 'FETCH_RANDOM_CHARACTER_START'
export const FETCH_RANDOM_CHARACTER_SUCCESS = 'FETCH_RANDOM_CHARACTER_SUCCESS'
export const FETCH_RANDOM_CHARACTER_FAIL = 'FETCH_RANDOM_CHARACTER_FAIL'



export const getAllCharacters = () => dispatch => {
   
    const url = `https://rickandmortyapi.com/api/character/`
    
    dispatch({type: FETCH_CHARACTERS_START})
    axios.get(url)
    .then(res => 
        dispatch({type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results}))
    .catch(err => 
        dispatch({type: FETCH_CHARACTERS_FAIL, payload: err}))
};

export const getRandomCharacter = () => dispatch => {

    const id = Math.floor(Math.random() * Math.floor(592))

    dispatch({type: FETCH_RANDOM_CHARACTER_START})
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => 
        dispatch({type: FETCH_RANDOM_CHARACTER_SUCCESS, payload: res.data}))
    .catch(err => 
        dispatch({type: FETCH_RANDOM_CHARACTER_FAIL, payload: err}))
        
    };









