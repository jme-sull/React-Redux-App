import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import { Button } from '@material-ui/core'


import { getAllCharacters } from './actions'
import { getRandomCharacter } from './actions'

import Character from './componets/Character';
import saveCharacter from './componets/saveCharacter'
import SavedCharacter from './componets/saveCharacter';

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
    <div className='App'> 

      <h2> Rick and Morty </h2>



      <div className="characters-container">
      
            { 
                props.characters.map(item => 
                  <Character key={item.id} character={item}/>) 
                
            }


            {
                  <Character character={props.character}/>
            }

            {
              props.savedCharacters.map(item =>
                <SavedCharacter character={item}/>)
            }




      </div>

      
      

      <button onClick={fetchAllCharacters}>Get All Characters</button>
      <button onClick={fetchRandomCharacter}>Get Random Character</button>

    </div>
    
  )
  
}

const mapStateToProps = state => {
  return {
    characters: state.allCharactersReducer.characters,
    error: state.allCharactersReducer.error,
    isFetching: state.allCharactersReducer.isFetching,
    character: state.randomCharacterReducer.character,
    savedCharacters: state.saveCharactersReducer.savedCharacters

  }
}



export default connect(mapStateToProps, { getAllCharacters, getRandomCharacter })(App);
