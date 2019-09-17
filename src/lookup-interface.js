import { LookupService } from './../js/lookup-service.js';

$(document).ready(function() {
  $('#doctorLocation').click(function() {
    let city = $('#userLocation').val();
    $('#userLocation').val("");




    let promise = // code moved to _lookup_service.js

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showDoctors').text(`The doctors in ${city} is ${body.main.doctors}%`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
