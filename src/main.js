import { LookupService } from './js/lookup-service.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
$(document).ready(function() {
  $('#doctorName').click(function() {
    let name = $('#nameInput').val();
    $('#userLocation').val("");




    let promise = // code moved to _lookup_service.js

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showDoctors').text(` Doctors matching your search for ${name} are ${body.main.doctors}%`);
      $('.showShowdoctors').text(`Doctors with the speciality ${query}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
