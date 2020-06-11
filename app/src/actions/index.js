import axios from 'axios'

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START'
export const FETCH_CHARACTERS_SUCCESS = 'ETCH_CHARACTERS_SUCCESS'
export const FETCH_CHARACTERS_FAIL = 'FETCH_CHARACTERS_FAIL'



export const getAllCharacters = () => dispatch => {
   
    const url = `https://rickandmortyapi.com/api/character/`
    
    dispatch({type: FETCH_CHARACTERS_START})
    axios.get(url)
    .then(res => 
        dispatch({type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results}))
    .catch(err => 
        dispatch({type: FETCH_CHARACTERS_FAIL, payload: err}))
};








