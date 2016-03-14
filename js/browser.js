var Entry = require('./entry.js').Entry;

$(document).ready(function(){
  $('#entry').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);

    $(".result").append(
    '<h3> Title: <br/> ' + title + '</h3>',
    '<h3> Body: <br/> <p>' + body + '</p></h3>',
    '<p> word count: ' + newEntry.wordCount() + '</p>'
    );
  });
});
