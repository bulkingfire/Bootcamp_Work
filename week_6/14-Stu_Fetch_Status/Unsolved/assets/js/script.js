var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      
      console.log(response.status);
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page

      if (response.status !== 200){
        responseText.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);
