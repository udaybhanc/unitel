import React,{Component} from 'react'
import {getMobileList} from '../../middleware/index'
import {connect} from 'react-redux'
import MobileView from '../../components/Mobile/mobileView'

class Mobile extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.getMobileData();
	}

	render(){
		return (
			<React.Fragment>
				<MobileView mobile_data={this.props.mobile_data}/>
			</React.Fragment>
			)
	}


}

const mapStateToProps=(state, ownProps)=>{
	console.log("")
	return{
		mobile_data:state.getAllMobileData.mobile_data
	}
}
const mapDispatchToProps=(dispatch,ownProps)=>{
	const getMobileDataTmp=()=>{
		dispatch(getMobileList())
	}

	return{
		getMobileData:getMobileDataTmp
	}
}

export default Mobile=connect(mapStateToProps,mapDispatchToProps)(Mobile)