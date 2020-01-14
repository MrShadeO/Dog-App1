/*
'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
*/

'use strict';

function displayResults(responseJson) {
    const jsonArray = responseJson.message;
    console.log(jsonArray);
    $('.results-img').empty();
    for (let i=0; i < jsonArray.length; i++) {
        console.log(jsonArray[i]);
        $('.results-img').append(`<img src="${jsonArray[i]}">`);
    }
    $('.results').removeClass('hidden');
  }

function getDogImages(userInput) {
    const dogURL = "https://dog.ceo/api/breeds/image/random/" + userInput;
    console.log(dogURL);
    fetch("https://dog.ceo/api/breeds/image/random/" + userInput)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert("Something went wrong. Try again later."));
}

function checkInput () {
    const userInput = $('.input-number').val();
    if (userInput < 1 || userInput > 50) {
        alert("Please enter a number equal to or greater than 1 and equal to or less than 50.");
    } else {
        getDogImages(userInput);
    }
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      checkInput();
    });
  }

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });