//import Game from './../dinosaur.js';
//import Letters from './../Letters.js';
//import Word from './../Word.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $('#dinoLetter').click(function() {
      const dinoLetter = $('#letter').val();
      $('#letter').val("");
// UI Logic end  

/*TODO*:
- functionality to hide/show the userGameResult section until the comparison function runs to completion.
*/
// business logic end  
  let dinosaurName = $("#dinosaur_name").show();
  let showDinosaurLetter = $(".showDinosaurLetter").show();   
/// figure out which is the first display, second; before/after calc completesß
  $('.showDinosaurLetter').text(`The dinosaur name is ${dinosaur_letter}%`); //check the request.body data 
  $('.showUserMisses').text(`The userMisses - ${user_misses} is ${body.main.dinosaur_name}%`);//check the request.body data
  $('.showDinosaurName').text(`The dinosaur name is ${dinosaur_name}%`); //check the request.body data 
//UI logic begin
    // promise.then((response) => JSON.parse(response) {
    //     resolve(response);
    // }).then(function(data){
    //     console.table(data);
    //   // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    //   }).then(function(error) {
    //     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    //   });
    // });

 
  }); 

  // function createNode(element) {
  //   return document.createElement(element); // Create the type of element you pass in the parameters
  // }

  // function append(parent, el) {
  //   return parent.appendChild(el); // Append the second parameter(element) to the first one
});