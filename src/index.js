import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from  'react-router-dom'
import { createStore, applyMiddleware} from 'redux'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import AxiosServises from './servises/axios-servises'
import { ServiceProvider } from './components/servises'

import combine from './store'
import logger from 'redux-logger'
import thunk from 'redux-thunk';


const  store =  createStore(combine,applyMiddleware(logger,thunk))

const axiosServises  = new AxiosServises();


ReactDOM.render(
  <Provider store = {store}>
      <ErrorBoundry>
          <ServiceProvider value = {axiosServises}>
              <Router>
                  <App/>
            </Router>
        </ServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)