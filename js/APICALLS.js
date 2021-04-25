function getScoresAPI() {
	
	console.log("fdsafdsa");
	/*
	fetch('http://159.89.51.129:8000/api/v1/acft', {mode: 'no-cors'})
	.then(response => {
		return response.json();
	})
	.then(users => {
		console.log(users);
	});
	*/

	fetch('http://159.89.51.129:8000/api/v1/acft')
	.then(function(response) {
	  if (!response.ok) {
	    throw Error(response.statusText);
	  }
	  // Read the response as json.
	  return response.json();
	})
	.then(function(responseAsJson) {
	  // Do stuff with the JSON
	  console.log(responseAsJson);
	})
	.catch(function(error) {
	  console.log('Looks like there was a problem: \n', error);
	});
	

	/*
	$(document).ready(function () {
		$.ajax({
			url: "http://159.89.51.129:8000/api/v1/acft",
			type: "GET",
			success: function (result) {
				console.log(result);
			},
			error: function (error) {
				console.log(error);
			}
		})
	})
	*/

	/*
	var settings = {
          'cache': false,
          'dataType': "jsonp",
          "async": true,
          "crossDomain": true,
          "url": "http://159.89.51.129:8000/api/v1/acft",
          "method": "GET",
          "headers": {
              "accept": "application/json",
              "Access-Control-Allow-Origin":"*"
          }
      }

      $.ajax(settings).done(function (response) {
          console.log(response);

      });
     */

	console.log("completed");
}

function postScoresAPI() {

}
