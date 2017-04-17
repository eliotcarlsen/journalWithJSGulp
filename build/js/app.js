(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "6b9ea19f6f94aef92fedf0d3fdf78b9f";

},{}],2:[function(require,module,exports){
function Journal(skinName){
  this.skin = skinName;
}

Journal.prototype.entryCheck = function (string) {
  var wordCount = string.trim().split(' ').length;
  return wordCount;
};

Journal.prototype.vowelCheck = function (string){
  var vowelCout = 0;
  var consonantCount = 0;
  for(var i = 0; i<=string.length; i++){
    if(string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u"){
      vowelCout += 1;
    } else {
      consonantCount += 1;
    }
  }
  return vowelCout + ',' + consonantCount;
};
Journal.prototype.getTeaser = function (string){
  var outputArray = [];
  var splitSentence = string.split(".");
  var wordCount = splitSentence[0].trim().split(' ').length;
  if(wordCount >= 8){
    var wordsArray = splitSentence[0].split(' ');
    for(var i=0; i < 8; i++){
      outputArray.push(wordsArray[i]);
    }
    return outputArray.join(' ');
  } else {
    return splitSentence[0];
  }
};


exports.journalModule = Journal;

},{}],3:[function(require,module,exports){
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

var apiKey = require('./../.env').apiKey;
$(document).ready(function() {
  console.log("I'm in weather interface")
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
     .then(function(response) {
         $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      })
      .fail(function(error){
        $('.showWeather').text(error.responseJSON.message);
      });
   });
});

},{"./../.env":1,"./../js/journal.js":2}]},{},[3]);
