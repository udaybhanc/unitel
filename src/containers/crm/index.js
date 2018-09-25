import React,{Component} from 'react'
import Mobile from './mobile'
import Iptv from './iptv'
import Search from './search'
import TicketInfo from '../../components/ticketInfo'
export default class App extends Component{
	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
	}
	handleClick(e){
        console.log("handleClick");
        console.log(e);
        console.log("value=="+e.target.value);

    }

	render(){
		return (
				<ul onClick={this.handleClick} className="collapsible crm-details">
				<li>
					<Search />
					<div className="collapsible-body clearfix">
						<div className="top-info">
							<ul className="collapsible">
								<Iptv/>
								<Mobile/>
								<TicketInfo/>
							</ul>
						</div>
					</div>
					<div >
                   		<iframe className="embed-responsive-item" src="http://10.10.2.179:8786/unitel_kb/index.html"></iframe>
                	</div>
				</li>
				</ul>
			)
	}

}
