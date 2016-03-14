var entry = require('./entry.js').entry;

$(document).ready(function(){
  $('#entry').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    
  });
});
