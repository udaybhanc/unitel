import $ from 'jquery'
export default function getIPTVList(){
        return (dispatch)=>{
                  var url = window.getApplicationCrmUrl();
                  var iframedata=window.getIframeData();
                  var endPoint = url+"/unitell_crm_api/testDataIptv.php?iframedata="+iframedata;
                  var objData={}
                  var method="GET";
                  dispatch(callWrapperAPI(endPoint,'',method,'SET_IPTV_DATA'));
  }
}

export function getMobileList(){
        return (dispatch)=>{
                  var url = window.getApplicationCrmUrl();
                  var iframedata=window.getIframeData();
                  var endPoint = url+"/unitell_crm_api/testDataMobile.php?iframedata="+iframedata;
                  var objData={}
                  var method="GET";
                  dispatch(callWrapperAPI(endPoint,'',method,'SET_MOBILE_DATA'));
  }
}


export function callWrapperAPI(endPoint,objData,method,actionType ){
     return (dispatch,getState)=>{
        $.ajax({
            url: endPoint,
            type: method,
            data: objData,
            cache: false,
            processData:false,
            success : function(result)
            {
            // console.log("result-interaction",result);
            }
        }).done(function (result){
           dispatch({ type: actionType,data:result})})
        }
}