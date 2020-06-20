import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'


import rootReducer from './reducers'


import './index.css';
import App from './App';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  )

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Provider store = {store}>
      <App />
  </Provider>
 </Router>,
 rootElement
  
);





