import React from 'react';
import ReactDom from 'react-dom';


//server side helpers
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

import App from './App';
import reportWebVitals from './reportWebVitals';


const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
  <React.StrictMode>
      <Provider store={store}>
      <App/>
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();