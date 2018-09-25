import React, { Component } from 'react';

export default class Search extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="collapsible-header clearfix top-collapsible-header">	
				<h4 className="left">CRM</h4>
				 <div className="input-field search-view-wrapper left">
						 <input placeholder="Search"  type="text" value="" placeholder="Search"/>
						 <label for="Search_text" className="active"></label>
						  <button><i className="zmdi zmdi-search"></i></button>
					  </div>
				<i className="zmdi zmdi-chevron-down right"></i>
			</div>
		)
	}
}
