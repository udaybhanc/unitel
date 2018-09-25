import React, { Component } from 'react'

import { Link, History } from 'react-router'
class Header extends Component{
  constructor(props) {
    super(props)
   
  }
  render() {
 

   return (
      <div className="container-fluid">
      <div className="row  ">
        <div className="col-md-12  clearfix top-banner">
           
          <div className="pull-right">
            <ul className="clearfix nav pull-right  primary_tab_listing" role="tablist">
            <li className={this.props.location.pathname === '/' ? 'active' : ''}><Link to="/">Agent Monitoring Dashboard</Link></li>
            
            </ul>
          </div>
        </div>
      </div>      
    </div>
    )
  }
}

export default Header;