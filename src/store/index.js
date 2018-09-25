import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootCallReducer from '../reducers/dashboardReducers'
const configureStore = preloadedState => createStore(
  rootCallReducer,
  preloadedState,
  applyMiddleware(thunk, api)
)

export default configureStore