import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import MainContainer from '../containers/MainContainer'
import { browserHistory} from 'react-router'
import { Router, Route,IndexRoute } from 'react-router'

const Root = ({ store, history }) => (

  <Provider store={store}>
    <div>
      <Router history={history}>
      	<Route path="/app/crm" component={MainContainer}>
		  </Route>
    </Router>

     </div>
  </Provider>
 )

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root



                   
