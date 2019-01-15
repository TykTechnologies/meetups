function myVirtualHandlerGetHeaders (request, session, config) {
    rawlog("Virtual Test running")
    
    //Usage examples:
    log("Request Session: " + JSON.stringify(session))
    log("API Config:" + JSON.stringify(config))
 
    log("Request object: " + JSON.stringify(request))   
    log("Request Body: " + JSON.stringify(request.Body))
    log("Request Headers:"+ JSON.stringify(request.Headers))
    log("param-1:"+ request.Params["param1"])
    
    log("Request header type:" + typeof JSON.stringify(request.Headers))
    log("Request header:" + JSON.stringify(request.Headers.Location))
    

    //Make api call to upstream target
    newRequest = {
        "Method": "GET",
        "Body": "",
        "Headers": {"location":JSON.stringify(request.Headers.Location)},
        "Domain": "http://httpbin.org",
        "Resource": "/headers",
        "FormData": {}
    };
    rawlog("--- before get to upstream ---")
    response = TykMakeHttpRequest(JSON.stringify(newRequest));
    rawlog("--- After get to upstream ---")
    log('response type: ' + typeof response);
    log('response: ' + response);
    usableResponse = JSON.parse(response);
    var bodyObject = JSON.parse(usableResponse.Body);
    
    var responseObject = {
        //Body: "THIS IS A  VIRTUAL RESPONSE",
        Body: "yo yo",
        Headers: {
            "test": "virtual",
            "test-2": "virtual",
            "location" : bodyObject.headers.Location
        },
        Code: usableResponse.Code
    }
    
    rawlog("Virtual Test ended")
    return TykJsResponse(responseObject, session.meta_data)   
}
