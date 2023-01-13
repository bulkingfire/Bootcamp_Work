var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  console.log(response.status);
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page

      if (response.status !== 200){
        document.location.href = redirectUrl
      }
      return response.json();
    })
    
    
  // If that status equals the conditional, then redirect to the 404 page.

