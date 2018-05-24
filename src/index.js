import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import AppContainer from './containers/AppContainer'
import store from './applications/store'
import './assets/style/bootstrap.css'
import history from './helpers/history'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('app'),
)
