var logResponse = function (http) {
  return function() {
    console.info('per-page ->', parseInt(http.getResponseHeader('per-page')))
    element = document.getElementById('api-log')
    element.className = 'api-response code prettyprint lang-js'
    element.innerHTML = http.responseText
  }
}

var data = null;

var apiRequest = function(path, method) {
  method = method || 'GET'
  path = path || '/vapid/companies'
  console.info(method, apiUrl + path)
  var httpRequest = new XMLHttpRequest()
    httpRequest.withCredentials = true;
  httpRequest.open(method, apiUrl + path, true)
  httpRequest.setRequestHeader('Authorization', 'Bearer '+ localStorage.getItem('accessToken'))
  httpRequest.onreadystatechange = logResponse(httpRequest)
  httpRequest.send()
  httpRequest.onload = function() {
    var companyidText = httpRequest.response; // get the string from the response
    var companyid = JSON.parse(companyidText); // convert it to an object
    populateHeader(companyid);
    showid(companyid);
}

logResponse.open('GET', apiUrl + 'vapid/companies');
logResponse.responseType = 'text'; // now we're getting a string!
logResponse.send();

logResponse.onload = function() {
  var companyidText = logResponse.response; // get the string from the response
  var companyid = JSON.parse(companyidText); // convert it to an object
  populateHeader(companyid);
  showid(companyid);
}

httpRequest.onload = function() {
  var id = httpRequest.response;
  populateHeader(id);
  showid(id);
}



function populateHeader(jsonObj) {
  var seattleid = document.createElement('seattleid');
  myseattleid.textContent = jsonObj['id'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}


apiRequest('/vapid/companies')
