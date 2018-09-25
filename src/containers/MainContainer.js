import React, { Component } from 'react'
import NotificationWidget from '../components/NotificationWidget'
import App from '../containers/crm/index'

class MainContainer extends Component {
  constructor(props) {
    super(props) 
  }

  render() {
    return (

        <div className="row">
            <div className="col s12 m12 l12 no-padding">
              <App/>           
             </div>
              <NotificationWidget/>
            </div>

    )
  }
}

export default MainContainer
