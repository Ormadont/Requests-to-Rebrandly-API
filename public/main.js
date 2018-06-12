// Information to reach API
const apiKey = 'd1c2020293fc4700b13930d607c029ae';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten  = inputField.value;
  //API expects to see an object with a key destination that has a value of a URL
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      //renderRawResponse(xhr.response);
      //renderRawResponse and renderResponse functions can be viewed at public/helperFunctions.js.
      renderResponse(xhr.response);
    }
  }
  xhr.open('POST', url);
  //To access the Rebrandly API, we need a header with two key-value pairs. In the header, you must include values for 'Content-type' and an 'apikey'.
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

//input:
//https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60
