import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import { getJoke } from './actions'

const App = props => {
  
  const fetchJokes = e => {
    e.preventDefault();
    props.getJoke();
  }
  
  return (
    <>
      <h2> Rick and Morty </h2>
      {props.joke.map(item => (
        <h3 key={item.id}>{item.name}</h3>
      ))}

      <button onClick={fetchJokes}>Click Me</button>

    </>
    
  )
  
}

const mapStateToProps = state => {
  return {
    joke: state.jokeReducer.joke,
    error: state.error,
    isFetching: state.isFetching
  }
}



export default connect(mapStateToProps, { getJoke })(App);
