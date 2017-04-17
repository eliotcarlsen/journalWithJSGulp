var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var journalEntry = $('#entry').val();
    var counter = new Journal("something");
    var wordCounter = counter.entryCheck(journalEntry);
    var vowelCheck = counter.vowelCheck(journalEntry);
    var teaser = counter.getTeaser(journalEntry);
    $('#output').append(wordCounter + ' ' + vowelCheck + ' ' + teaser + '...');
    $('#journal-form').hide();
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#output').prepend(email);
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = "6b9ea19f6f94aef92fedf0d3fdf78b9f";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response){
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
