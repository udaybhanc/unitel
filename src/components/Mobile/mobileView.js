import React,{Component} from 'react'

const MobileRow = (props) => {
    return (
                <li>
                  <div className="collapsible-header clearfix">
                    <div className="single-item">
                        <h5>Mobile 1</h5>
                        <span>{props.data.mobile}</span>
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



export default class MobileView extends Component{
	constructor(props){
		super(props);

	}
	


	render(){

		

		let rows;
                console.log("Mobile=="+this.props.mobile_data);

		if(this.props && this.props.mobile_data){
            console.log("Mobile");

			let mobile_data_tmp=JSON.parse(this.props.mobile_data);
		    rows=mobile_data_tmp.map(mobile => {
       			return <MobileRow key={mobile.mobile_id} data={mobile}/>
     		});
    	}

		return(
			    <React.Fragment>
                 {rows}
                </React.Fragment>
              )

	}

}



