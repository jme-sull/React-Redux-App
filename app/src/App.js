import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import { Button } from '@material-ui/core'


import { getAllCharacters } from './actions'
import Character from './componets/Character';

const App = props => {
  
  const fetchAllCharacters = e => {
    e.preventDefault();
    props.getAllCharacters();
  }

 
  
  return (
    <>
      <h2> Rick and Morty </h2>
      
      {
        props.characters.map(item => 
          <Character key={item.id} character={item}/>
        )

      }

      
      

      <Button onClick={fetchAllCharacters}>Get All Characters</Button>

    </>
    
  )
  
}

const mapStateToProps = state => {
  return {
    characters: state.allCharactersReducer.characters,
    error: state.allCharactersReducer.error,
    isFetching: state.allCharactersReducer.isFetching
  }
}



export default connect(mapStateToProps, { getAllCharacters })(App);
