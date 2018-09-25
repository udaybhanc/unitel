import {reducer as formReducer } from 'redux-form'
import getAllMobileData from './mobileReducer'
import getAllIptvData from './iptvReducers'
import {combineReducers} from 'redux'
import {routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
 form: formReducer,     // Mounted at 'form'
 routing: routerReducer,
 getAllIptvData,
 getAllMobileData
 });
export default rootReducer