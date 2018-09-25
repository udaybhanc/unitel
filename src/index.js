import {render} from 'react-dom'
import React from 'react'
import { browserHistory} from 'react-router'
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
const store = configureStore()

const history = syncHistoryWithStore(createBrowserHistory(), store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
