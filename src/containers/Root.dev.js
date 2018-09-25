import React from 'react'
import PropTypes from 'prop-types' 
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import MainContainer from '../containers/MainContainer'



const Root = ({ store, history }) => (

  <Provider store={store}>
    <div>
      <MainContainer/>
    </div>
  </Provider>
 )

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root