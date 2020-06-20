import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
        <nav>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/saved'>Saved</Link>
          </li>
          
       </nav>


    
        <div className="characters-container">

          <Switch>
              <Route path='/all'>
                { 
                    props.characters.map(item => 
                      <Character key={item.id} character={item}/>)      
                }
            </Route>

            <Route path='/random'>

                {
                  <Character character={props.character}/>
                }
            </Route>

              <Route path='/saved'>
                    {
                      props.savedCharacters.map(item =>
                        <Character character={item}/>)
                    }
              </Route>
   
    </Switch>


      </div>

      
      

      <button onClick={fetchAllCharacters}>
        <Link to='/all'>Get All Characters</Link>
        </button>
      <button onClick={fetchRandomCharacter}>
        <Link to='/random'>Get Random Character</Link>
        </button>

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
