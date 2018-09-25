export default function getAllMobileData(state = {data:[],loading:"loading"}, action)  {
	
	switch(action.type) {
		case 'SET_MOBILE_DATA':	
		return {
		    	...state,
		    	mobile_data:action.data
		}
		default: 
			return state;
	 }
 }

