exports.Entry = function(title, body){
  this.title = title;
  this.body = body;
};

exports.Entry.prototype.wordCount = function(){
  var words = [];
  var word_arr = this.body.split(" ");
  for (var i = 0; i < word_arr.length; i++){
    words.push(word_arr[i]);
  }
  console.log(words);
  return words.length;
};
