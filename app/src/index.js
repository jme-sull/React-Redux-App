import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import rootReducer from './reducers'


import './index.css';
import App from './App';


const store = createStore(rootReducer)

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store = {store}>
    <App />
 </Provider>,
 rootElement
  
);





