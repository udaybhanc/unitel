function httpRequest(reqType,url,asynch,respHandle){
	if(window.XMLHttpRequest) {
		request = new window.XMLHttpRequest(); // For Mozilla
	} else if(window.ActiveXObject) {

		request = new window.ActiveXObject("Msxml2.XMLHTTP");
		if(!request) {
			request = new window.ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	
	if(request) {
		if(reqType.toLowerCase() != "post"){
			initReq(reqType,url,asynch,respHandle);
		} else {
			var args = arguments[4]; // post request data
			if(args !=null && args.length > 0) {
			  initReq(reqType,url,asynch,respHandle);	
			}
		}
	} else {
		alert("Your Browser does not permit the use of all "+ "of this application's features")
	}
}

/* Initialize the request object that is already constructed */

function  initReq(reqType,url,asynch,respHandle) {
     try {
	 /* Specify the function that will handle the  HTTP response */

	request.onreadystatechange = responseHandle;
	request.open(reqType,url,asynch);
	if(reqType.toLowerCase() == "post"){
		//request.setRequestHeader("Content-Type","application/x-www-urlencode");
		request.send(arguments[4]);
	} else {
		request.send(null);
	}
      } catch (errv) {
	alert("The application cannot contact " + "the server a the moment "+ "Please try agaign in a few seconds "+ "Error details "+ errv.message);
      }
	
}

function responseHandle() {
	if(request.readyState == 4) {
		if(request.status == 200) {
			alert(request.responseText);
		}
	}
}


//var _url ="request.html";
//var _data = "firstname=amit&lastname=pathak";
//var handleResponse;
//httpRequest("POST",_url,true,handleResponse,_data);
