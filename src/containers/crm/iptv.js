import React,{Component} from 'react'
import getIPTVList from '../../middleware/index'
import {getMobileList} from '../../middleware/index'
import IptvView from '../../components/IPTV/iptvView'



import {connect} from 'react-redux'

class Iptv extends Component{
	constructor(props){
		super(props);
		
	}
	componentDidMount(){
		this.props.getData();
	}
	render(){
		return(
			<React.Fragment>
				<IptvView iptv_data={this.props.iptv_data}/>
			</React.Fragment>
			)
	}
}
const mapStateToProps=(state, ownProps)=>{
	return{
		iptv_data:state.getAllIptvData.iptv_data,
		
	}
}
const mapDispatchToProps=(dispatch,ownProps)=>{
	const getIPTVDataTmp=()=>{
		dispatch(getIPTVList())		
	}

	return{
		getData:getIPTVDataTmp
		
	}
}

export default Iptv=connect(mapStateToProps,mapDispatchToProps)(Iptv)
