import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import { Button } from '@material-ui/core'


import { getAllCharacters } from './actions'
import { getRandomCharacter } from './actions'
import Character from './componets/Character';

const App = props => {
  
  const fetchAllCharacters = e => {
    e.preventDefault();
    props.getAllCharacters();
  }

  const fetchRandomCharacter = e => {
    e.preventDefault();
    props.getRandomCharacter();
  }

 
  
  return (
    <>
      <h2> Rick and Morty </h2>
      
      {  
          props.characters.map(item => 
            <Character key={item.id} character={item}/>) 
      }

      {
        <Character character={props.character}/>
      }

      
      

      <button onClick={fetchAllCharacters}>Get All Characters</button>
      <button onClick={fetchRandomCharacter}>Get Random Character</button>

    </>
    
  )
  
}

const mapStateToProps = state => {
  return {
    characters: state.allCharactersReducer.characters,
    error: state.allCharactersReducer.error,
    isFetching: state.allCharactersReducer.isFetching,
    character: state.randomCharacterReducer.character
  }
}



export default connect(mapStateToProps, { getAllCharacters, getRandomCharacter })(App);
