export default function getAllIptvData(state = {data:[],loading:"loading"}, action)  {
	
	switch(action.type) {
		case 'SET_IPTV_DATA':	
		return {
		    	...state,
		    	iptv_data:action.data
		}
		default: 
			return state;
	 }
 }

