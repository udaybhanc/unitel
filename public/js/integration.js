if (window.attachEvent) {
	window.attachEvent('onmessage', processPostMessage);
} else {
	window.addEventListener('message', processPostMessage, false);
}


var windowIFrameId=getParameterByName("iframeId");
function getParameterByName(name) {
   var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function processPostMessage(event) {
	var theObject;
	
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

function genericPlugin() {

}
var keyValue = new Array();
function registerFunction(key, value) {
	keyValue[key] = value;
}
var ID = function () {
	return '_' + Math.random().toString(36).substr(2, 9);
};
genericPlugin.prototype.callRestAPI = callRest;
function doPostMessage(message) {
	var result = '';
	try {
		
		//result = "https://ameyo.salebuild.com:8887/app/#injectedHeader";
		//result = "http://ameyo.salebuild.com:8888/app/#injectedHeader";
		//result = "http://10.10.3.108:8888/app/app/#injectedHeader";
	} catch (e) {
		//result = "https://ameyo.salebuild.com:8887/app/";// if not working give crm url
		//result = "http://10.10.3.108:8888/app/";
		//result = "https://ameyo.salebuild.com:8887/app/";// if not working give crm url
	//	result = "http://ameyo.salebuild.com:8888/app/#injectedHeader";

	}
	//replace star with ip of the parent
	window.parent.postMessage(message, "*");
}

function callRest(endpoint, additionalParams,methodType,call,iframeId) {
	var id=ID();
	var theObject = {
			method : 'rest',
			endPointURL:endpoint,
			additionalParams : additionalParams,
			id:id,
			iframeId:iframeId,
			methodType:methodType
	};
	registerFunction(id,call);
	var message = JSON.stringify(theObject);
	//console.log(message);
	doPostMessage(message);
}

function getApplicationCrmUrl() {
	//return 'http://10.180.12.90:8786';
		return 'http://10.10.2.179:8786';
	//return 'https://ameyofailover.dhiraagu.com.mv:8786';
}

function getIframeData() {
	var urlObj ={}
	var url = window.location.search.substring(1);
	var vars = url.split("&");
	for (var i=0;i<vars.length;i++) {
      var param = vars[i].split("=");
      urlObj[param[0]] = param[1];
    }
    return urlObj;
}
function getWallboardScreens() {
  var screen = {}
  screen['inboundScreen'] = new Array('Campaign_View','Interaction');
  screen['outboundScreen'] = new Array('Outbound_Campaign_View');
  return screen;
}

function callAmeyoRest(endpoint,additionalParams,methodType,callBack){
	var urlParam =  window.getIframeData();
	
                //var iframeId=urlParam.iframeId;
                //window.parent.document.getElementById(iframeId).height = '700px';


	callRest(endpoint,additionalParams,methodType,callBack,windowIFrameId)
}
function getContactCenterId(callBack){

	var id=ID();
	var urlParam =  window.getIframeData();
	var theObject = {
			method : 'contactCenterId',
			id:id,
			iframeId:windowIFrameId
			
	};
	registerFunction(id,callBack);
	var message = JSON.stringify(theObject);

	doPostMessage(message);
}

