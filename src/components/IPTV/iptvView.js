import React,{Component} from 'react'


const IPTVRow = (props) => {
    var row = [];
   return (
                <li  >
                  <div className="collapsible-header clearfix">
                    <div className="single-item">
                        <h5>IPTV 1</h5>
                        <span>{props.data.iptv}</span>
                    </div>
                    <div className="single-item">
                        <h5>EntrNo</h5>
                        <span>{props.data.entr_no}</span>
                    </div>
                    <div className="single-item">
                        <h5>Sub Type</h5>
                        <span>{props.data.sub_type}</span>
                    </div>
                    <div className="single-item">
                        <h5>Package</h5>
                        <span>{props.data.package}</span>
                    </div>
                    <i className="zmdi zmdi-chevron-down"></i>
                    </div>
                  <div className="collapsible-body clearfix">
                    <div className="single-item">
                        <h5>Sim No</h5>
                        <span>{props.data.sim_no}</span>
                    </div>
                    <div className="single-item">
                        <h5>Address</h5>
                        <span>{props.data.address}</span>
                    </div>
                    <div className="single-item">
                        <h5>Package Type</h5>
                        <span>{props.data.package_type}</span>
                    </div>
                    <div className="single-item">
                        <h5>Product Type</h5>
                        <span>{props.data.product_type}</span>
                    </div>
                    <div className="single-item">
                        <h5>Ekor</h5>
                        <span>{props.data.ekor}</span>
                    </div>
                    <i></i>
                    </div>
                </li>                
            
		)
}


export default class IptvView extends Component{
	constructor(props){
		super(props);
    }
    render(){
		let iptv_rows;
		if(this.props && this.props.iptv_data){
            let iptv_data_tmp=JSON.parse(this.props.iptv_data);
		    iptv_rows=iptv_data_tmp.map(iptv => {
       			return <IPTVRow handleClick={this.handleClick} key={iptv.iptv_id} data={iptv}/>
     		});
    	}

        return(
                <React.Fragment>
                    {iptv_rows}
                </React.Fragment>
            )

	}

}

