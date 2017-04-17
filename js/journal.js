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
