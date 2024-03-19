const noop = () => {};
const NO_PARAMS = {};
const NO_HEADERS = {};
const OK_200 = [200, 201];

function request({
    method = 'GET',
    url,
    params = NO_PARAMS,
    headers = NO_HEADERS,
    body,
    responseType = 'json',
    requestType = 'json',
    okResponse = OK_200,
    checkStatusInResponse = false,
    onSuccess = noop,
    onError = noop,
}) {
    
    // создаем объект
    const req = new XMLHttpRequest();

    // формуруем строку параметров
    const urlParams = new URLSearchParams(params);
    const queryString = urlParams.toString();

    req.open(method, url + (queryString ? `?${queryString}` : ''));

    Object.keys(headers).forEach((key) => {
        req.setRequestHeader(key, headers[key]);
    });

    req.responseType = responseType;

    req.onload = function(event){
        const target = event.target;

        if(!okResponse.includes(target.status)){
            onError(target.statusText);
            console.log('request 40'); 
            return;
        };

        if(checkStatusInResponse && target.response.status !== 'ok'){
            onError(target.statusText);
            return;
        };

        onSuccess(target.response);
    };

    req.onerror = function (){
        onError();
    };

    let dataBody = body;

    if (requestType === 'urlencoded'){
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        const bodyParams = new URLSearchParams(body);
        dataBody = bodyParams.toString();
    }

    if(requestType === 'json'){
        req.setRequestHeader('Content-type', 'application/json');
        dataBody = JSON.stringify(body);
    }

    req.send(dataBody);
}