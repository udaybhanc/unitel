import React,{Component} from 'react'

export default class TicketInfo extends Component{
	constructor(props){
		super(props);
	}
	render(){

		return (
			<div className="bottom-info">
            <div className="ticket-header-detail">
                <h4>Customer’s Open Tickets</h4>
            </div>
            <div className="ticket-body-detail-wrapper">
                <div className="ticket-body-detail clearfix">
                    <div className="selector">
                        <p>
                            <input name="group1" type="radio" id="t1" className="with-gap small" />
                            <label for="t1"></label>
                        </p>
                    </div>
                    <div className="subject">
                        <p>Ticket Id: 1536917247027</p>
                    </div>
                    <div className="description">
                        <p>Ticket corresponding to call: d260-5b9b7ebb-vce-50</p>
                    </div>
                </div>

                <div className="ticket-body-detail clearfix">
                    <div className="selector">
                        <p>
                            <input name="group1" type="radio" id="t1" className="with-gap small" />
                            <label for="t1"></label>
                        </p>
                    </div>
                    <div className="subject">
                        <p>Ticket Id: 1536917247027</p>
                    </div>
                    <div className="description">
                        <p>Ticket corresponding to call: d260-5b9b7ebb-vce-50</p>
                    </div>
                </div>

                <div className="ticket-body-detail clearfix">
                    <div className="selector">
                        <p>
                            <input name="group1" type="radio" id="t1" className="with-gap small" />
                            <label for="t1"></label>
                        </p>
                    </div>
                    <div className="subject">
                        <p>Ticket Id: 1536917247027</p>
                    </div>
                    <div className="description">
                        <p>Ticket corresponding to call: d260-5b9b7ebb-vce-50</p>
                    </div>
                </div>
                <div className="ticket-body-detail clearfix">
                    <div className="selector">
                        <p>
                            <input name="group1" type="radio" id="t1" className="with-gap small" />
                            <label for="t1"></label>
                        </p>
                    </div>
                    <div className="subject">
                        <p>Ticket Id: 1536917247027</p>
                    </div>
                    <div className="description">
                        <p>Ticket corresponding to call: d260-5b9b7ebb-vce-50</p>
                    </div>
                </div>
            </div>

        </div>


			)
	}



}