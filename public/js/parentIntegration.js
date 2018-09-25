if (window.attachEvent) {
	window.attachEvent('onmessage', processPostMessageParent);
} else {
	window.addEventListener('message', processPostMessageParent, false);
}



function processPostMessageParent(event) {
	var theObject=event.data;
	console.log("data===>>>"+JSON.stringify(theObject));	
	if(event.data){
	   //theObject= JSON.parse(event.data);	
	}

	if(theObject!==undefined && theObject.method == 'response'){
		id=theObject.id;
		if(keyValue[id]){
			if(theObject.response==="ok"){
				keyValue[id](theObject.response, theObject.status);
			}
			else{
			keyValue[id](JSON.parse(theObject.response));
		}
			delete keyValue[id];
		}
	}
}
